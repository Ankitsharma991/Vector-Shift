from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Optional
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict, deque

app = FastAPI()

# Adding CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, str]
    width: float
    height: float
    selected: Optional[bool] = False
    positionAbsolute: Optional[Dict[str, float]] = None
    dragging: Optional[bool] = False

class Edge(BaseModel):
    source: str
    sourceHandle: str
    target: str
    targetHandle: str
    type: str
    animated: Optional[bool] = False
    markerEnd: Optional[Dict[str, str]] = None
    id: str

class GraphData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/pipelines/parse/")
async def parse_pipeline(data: GraphData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)
    is_dag = check_dag(data.nodes, data.edges)
    
    output = {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}
    return output

def check_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    # Creating adjacency list and in-degree count
    adj_list = defaultdict(list)
    in_degree = defaultdict(int)
    
    for edge in edges:
        adj_list[edge.source].append(edge.target)
        in_degree[edge.target] += 1
        if edge.source not in in_degree:
            in_degree[edge.source] = 0
    
    # Topological sort using Kahn's algorithm
    queue = deque(node.id for node in nodes if in_degree[node.id] == 0)
    visited_count = 0
    
    while queue:
        node = queue.popleft()
        visited_count += 1
        for neighbor in adj_list[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # If visited count is equal to number of unique nodes, it's a DAG
    return visited_count == len(nodes)

# This route is for testing backend server
@app.get("/hello")
async def hello():
    return {"hello": "world"}


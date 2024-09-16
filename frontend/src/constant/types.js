import { InputNode } from "../nodes/inputNode";
import { LLMNode } from "../nodes/llmNode";
import { OutputNode } from "../nodes/outputNode";
import { TextNode } from "../nodes/textNode";
import { CustomNode } from "../nodes/CustomNode";

export const nodeTypes = {
  customInput: InputNode,
  customOutput: OutputNode,
  llm: LLMNode,
  text: TextNode,
  custom: CustomNode,
};

export const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

# VectorShift Frontend Technical Assessment

This repository contains the frontend and backend code for the VectorShift Frontend Technical Assessment. The project uses React (frontend) and FastAPI (backend). Below is a detailed guide on how to run and understand the structure of the project.

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Part 1: Node Abstraction](#part-1-node-abstraction)
- [Part 2: Styling](#part-2-styling)
- [Part 3: Text Node Logic](#part-3-text-node-logic)
- [Part 4: Backend Integration](#part-4-backend-integration)
- [Technologies Used](#technologies-used)

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or above)
- Python (v3.7 or above)

### Installation

1. Clone this repository:
   ```bash
   https://github.com/Ankitsharma991/Vector-Shift
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Install frontend dependencies:
   ```bash
   npm install
   ```

4. Start the frontend server:
   ```bash
   npm start
   ```

5. In a new terminal, navigate to the backend directory:
   ```bash
   cd backend
   ```

6. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

7. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

### Running the Application

- Navigate to `http://localhost:3000` to view the frontend.
- The backend API will be available at `http://localhost:8000`.

## Features

### Part 1: Node Abstraction
The project introduces a flexible abstraction for nodes to streamline the process of creating and modifying nodes. Five new node types have been created to showcase the flexibility of this abstraction:
- Inputs Node
- Outputs Node
- LLMs Node
- Text Node
- Custom Node

The abstraction reduces code repetition and simplifies future node creation and styling consistency.

### Part 2: Styling
The frontend has been styled using a combination of:
- **Tailwind CSS** for core styling
- **React Bootstrap** for specific components

This ensures a cohesive and modern design, allowing for responsive and visually appealing layouts across different screen sizes.

### Part 3: Text Node Logic
The Text node has been enhanced with the following features:
1. **Dynamic Resizing**: The width and height of the text input field adjust dynamically as the user types, improving visibility.
2. **Variable Handling**: Users can define variables in their text using double curly brackets (`{{ variable }}`). When a valid JavaScript variable is entered, a new input handle will appear on the left side of the node, corresponding to the variable.

### Part 4: Backend Integration
The frontend integrates with the backend using FastAPI. The following functionality has been implemented:
1. **Pipeline Submission**: The frontend sends the node and edge data to the `/pipelines/parse` endpoint.
2. **DAG Validation**: The backend calculates the number of nodes and edges and determines if the pipeline forms a Directed Acyclic Graph (DAG).
3. **Response Handling**: Upon receiving the backend response, the frontend displays an alert with the following information:
   - Number of nodes
   - Number of edges
   - Whether the pipeline forms a DAG

## Technologies Used
### Frontend
- **React**: JavaScript framework for building the UI.
- **ReactFlow**: To handle the creation and management of nodes.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Bootstrap**: For additional styling components.
  
### Backend
- **FastAPI**: Modern web framework for building APIs with Python.
- **Uvicorn**: ASGI server to run the FastAPI backend.

## Improvements Areas
- Improved validation logic for variables in the Text node to handle more complex scenarios.
- Enhanced user experience through better UX/UI feedback and real-time validation.


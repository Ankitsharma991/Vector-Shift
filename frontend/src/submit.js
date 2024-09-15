import { useState } from "react";
import { ModalComponent } from "./modal";
import { parsePipelines } from "./services/routes";

export const SubmitButton = ({
  nodes, edges
}) => {

  const [modalShow, setModalShow] = useState(false);
  const [results, setResults] = useState(
    {'num_nodes': 0, 'num_edges': 0, 'is_dag': false}
  )
  const buttonStyle = {
    padding: "12px 24px",
    background: "linear-gradient(45deg, #461892 25%, #3377D0 75%)",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15px",
    marginRight: "20px"
  };

  const hoverStyle = {
    background: "linear-gradient(45deg, #3d147f 25%, #2e66ac 75%)",
    transform: "scale(1.05)",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, hoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, buttonStyle);
  };

  const handleSubmit = async () => {
    //first validate
    if(nodes.length==0 || edges.length==0){
      alert("Please create a proper pipeline first!")
    }else{
      const object = {
        nodes: nodes,
        edges: edges
      }
      console.log(object)
      const results = await parsePipelines(object)
      setResults(results)
      setModalShow(true)
    }

  }

  return (
    <div style={containerStyle}>
      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} data={results}/>
      <button
        onClick={handleSubmit}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Submit
      </button>
    </div>
  );
};

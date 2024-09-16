import { useState } from "react";
import { ModalComponent } from "./modal";
import { parsePipelines } from "./services/routes";

const Loader = () => (
  <div style={loaderStyle}>
    <div style={spinnerStyle}></div>
    <p>Loading...</p>
  </div>
);

const blurStyle = {
  filter: "blur(4px)",
  transition: "filter 0.3s ease",
};

const unblurStyle = {
  filter: "none",
  transition: "filter 0.3s ease",
};

export const SubmitButton = ({
  nodes, edges
}) => {

  const [modalShow, setModalShow] = useState(false);
  const [results, setResults] = useState(
    { 'num_nodes': 0, 'num_edges': 0, 'is_dag': false }
  );
  const [loading, setLoading] = useState(false);

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
    if (nodes.length === 0 || edges.length === 0) {
      alert("Please create a proper pipeline first!");
    } else {
      setLoading(true);
      const object = {
        nodes: nodes,
        edges: edges
      };
      console.log(object);
      const results = await parsePipelines(object);
      setResults(results);
      setModalShow(true);
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      {loading && <Loader />}
      <div style={loading ? blurStyle : unblurStyle}>
        <ModalComponent show={modalShow} onHide={() => setModalShow(false)} data={results} />
        <button
          onClick={handleSubmit}
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const loaderStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "1000",
  color: "#fff",
  fontSize: "1.5rem",
};

const spinnerStyle = {
  border: "8px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "50%",
  borderTop: "8px solid #fff",
  width: "50px",
  height: "50px",
  animation: "spin 1s linear infinite",
};

const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Insert keyframes into the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = spinKeyframes;
document.head.appendChild(styleSheet);


// import { useState } from "react";
// import { Handle, Position } from "reactflow";
// import "./BaseNode.css"; // Import the CSS file

// export const BaseNode = ({
//   id,
//   data,
//   inputHandles,
//   outputHandles,
//   showInput,
//   showDescription,
//   showFileInput,
// }) => {
//   const [currName, setCurrName] = useState();
//   const [inputType, setInputType] = useState();

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setInputType(e.target.value);
//   };

//   return (
//     <div className="base-node-container">
//       {/* Input Handles */}
//       {inputHandles?.map((handle, index) => (
//         <Handle
//           key={`input-${index}`}
//           type="target"
//           position={Position.Left}
//           id={`${id}-${handle.id}`}
//           style={{ top: handle.top }}
//           className="handle-input"
//         />
//       ))}

//       {/* Content */}
//       <div className="node-content">
//         <div className="node-label">{data.label || "Node"}</div>
//         {showDescription && (
//           <div className="node-description">
//             {data.description || "This is a node."}
//           </div>
//         )}
//       </div>

//       {/* Input fields */}
//       <div className="input-section">
//         {showInput && (
//           <label>
//             Name:
//             <input
//               type="text"
//               value={currName}
//               onChange={handleNameChange}
//               className="input-field"
//             />
//           </label>
//         )}
//         {showFileInput && (
//           <label>
//             Type:
//             <select
//               value={inputType}
//               onChange={handleTypeChange}
//               className="select-field"
//             >
//               <option value="Text">Text</option>
//               <option value="File">File</option>
//             </select>
//           </label>
//         )}
//       </div>

//       {/* Output Handles */}
//       {outputHandles?.map((handle, index) => (
//         <Handle
//           key={`output-${index}`}
//           type="source"
//           position={Position.Right}
//           id={`${id}-${handle.id}`}
//           style={{ top: handle.top }}
//           className="handle-output"
//         />
//       ))}
//     </div>
//   );
// };

import { useState } from "react";
import { Handle, Position } from "reactflow";
import "./BaseNode.css";
import FILE from "../assets/files.png";

export const BaseNode = ({
  id,
  data,
  inputHandles,
  outputHandles,
  showInput,
  showDescription,
  showFileInput,
}) => {
  // Default value for input type is set to "Text"
  const [currName, setCurrName] = useState("");
  const [inputType, setInputType] = useState("Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="base-node-container">
      {/* Input Handles */}
      {inputHandles?.map((handle, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${handle.id}`}
          style={{ top: handle.top }}
          className="handle-input"
        />
      ))}

      {/* Content */}
      <div className="node-content">
        <div className="node-label">{data.label || "Node"}</div>
        {showDescription && (
          <div className="node-description">
            {data.description || "This is a node."}
          </div>
        )}
      </div>

      {/* Input fields or file image */}
      <div className="input-section">
        {showInput && (
          <>
            {inputType === "Text" ? (
              <label>
                Name:
                <input
                  type="text"
                  value={currName}
                  onChange={handleNameChange}
                  className="input-field"
                  placeholder="Enter text here"
                />
              </label>
            ) : (
              <div className="file-image">
                {/* Display a placeholder image for file type */}
                <img
                  src={FILE} // Replace with actual file image path
                  alt="File"
                  className="file-image-placeholder"
                />
              </div>
            )}
          </>
        )}
        {showFileInput && (
          <label>
            Type:
            <select
              value={inputType}
              onChange={handleTypeChange}
              className="select-field"
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        )}
      </div>

      {/* Output Handles */}
      {outputHandles?.map((handle, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${handle.id}`}
          style={{ top: handle.top }}
          className="handle-output"
        />
      ))}
    </div>
  );
};

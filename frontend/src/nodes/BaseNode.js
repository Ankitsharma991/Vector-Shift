import { useState, useEffect } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import "./BaseNode.css";
import FILE from "../assets/files.png";
import { IoMdClose } from "react-icons/io";

export const BaseNode = ({
  id,
  data,
  inputHandles,
  outputHandles,
  showInput,
  showDescription,
  showFileInput,
}) => {
  const [currName, setCurrName] = useState("");
  const [inputType, setInputType] = useState("Text");
  const [dynamicHandles, setDynamicHandles] = useState([]);
  const { setNodes } = useReactFlow();

  const [textAreaHeight, setTextAreaHeight] = useState(30);

  const removeNode = () => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  useEffect(() => {
    const textLength = currName.length;
    const newHeight = Math.max(30, Math.min(textLength * 0.5, 100));
    setTextAreaHeight(newHeight);
  }, [currName]);

  useEffect(() => {
    const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\}\}/g;
    const matches = [...currName.matchAll(variableRegex)];

    const newHandles = matches.map((match, index) => ({
      id: match[1],
      top: 50 + index * 20,
      label: match[1],
    }));

    setDynamicHandles(newHandles);
    console.log("newHandles", newHandles);
  }, [currName]);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="base-node-container">
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
      {dynamicHandles?.map((handle, index) => (
        <>
          <Handle
            key={`dynamic-input-${index}`}
            type="source"
            position={Position.Left}
            id={`${id}-dynamic-${handle.id}`}
            style={{ top: handle.top }}
            className="handle-input"
          />
          <div
            style={{
              position: "absolute",
              color: "#fff",
              left: -45,
              top: 50,
            }}
          >
            {dynamicHandles[index].label}
          </div>
        </>
      ))}
      <div className="node-content">
        <div className="node-label">{data.label || "Node"}</div>
        <div
          onClick={removeNode}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          <IoMdClose color="#fff" size={20} />
        </div>
        {showDescription && (
          <div className="node-description">
            {data.description || "This is a node."}
          </div>
        )}
      </div>
      <div className="input-section">
        {showInput && (
          <>
            {inputType === "Text" ? (
              <label>
                Name:
                <textarea
                  value={currName}
                  onChange={handleNameChange}
                  className="input-field"
                  placeholder="Enter text here"
                  style={{
                    width: "100%",
                    height: `${textAreaHeight}px`,
                    resize: "none",
                    overflow: "hidden",
                  }}
                />
              </label>
            ) : (
              <div className="file-image">
                <img src={FILE} alt="File" className="file-image-placeholder" />
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
              style={{ width: "100%" }} // Full width
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        )}
      </div>
      {outputHandles?.map((handle, index) => (
        <div>
          <Handle
            key={`output-${index}`}
            type="source"
            position={Position.Right}
            id={`${id}-${handle.id}`}
            style={{ top: handle.top }}
            className="handle-output"
          />
        </div>
      ))}
    </div>
  );
};

// LLMNode.js

import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  const inputHandles = [
    { id: "system", top: "33%" },
    { id: "prompt", top: "66%" },
  ];

  const outputHandles = [{ id: "response", top: "50%" }];

  return (
    <BaseNode
      id={id}
      showDescription={true}
      data={{
        label: "LLM",
        description: "This is an LLM node.",
      }}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
    />
  );
};

// import { Handle, Position } from "reactflow";

// export const LLMNode = ({ id, data }) => {
//   return (
//     <div style={{ width: 200, height: 80, border: "1px solid black" }}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{ top: `${100 / 3}% ` }}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{ top: `${200 / 3}% ` }}
//       />

//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle type="source" position={Position.Right} id={`${id}-response`} />
//     </div>
//   );
// };

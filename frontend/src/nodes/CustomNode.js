// CustomNode.js
import { BaseNode } from "./BaseNode";

export const CustomNode = ({ id, data }) => {
  const inputHandles = [
    { id: "input1", top: "33%" },
    { id: "input2", top: "66%" },
  ];

  const outputHandles = [
    { id: "output", top: "33%" },
    { id: "output", top: "66%" },
  ];

  return (
    <BaseNode
      id={id}
      data={{
        label: "Custom Node",
        description: "Performs custom operations",
      }}
      showDescription={true}
      showInput={true}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      showFileInput={true}
    />
  );
};

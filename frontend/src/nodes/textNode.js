// textNode.js

import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const outputHandles = [{ id: "output", top: "50%" }];

  return (
    <BaseNode
      id={id}
      data={{
        label: "Text",
        description: "Text: ",
        inputLabel:"Text:"
      }}
      showDescription={true}
      showInput={true}
      outputHandles={outputHandles}
    />
  );
};

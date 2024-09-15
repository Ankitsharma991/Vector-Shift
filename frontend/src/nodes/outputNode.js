// outputNode.js

import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const outputHandles = [{ id: "output", top: "50%" }];
  return (
    <BaseNode
      id={id}
      data={{
        label: "Input Node",
        description: "This is an LLM node.",
      }}
      inputHandles={[
        {
          name: "inputName",
          label: "Name",
          type: "text",
          defaultValue: data?.inputName || id.replace("customInput-", "input_"),
        },
        {
          name: "inputType",
          label: "Type",
          type: "select",
          options: [
            { value: "Text", label: "Text" },
            { value: "File", label: "File" },
          ],
        },
      ]}
      label="Input"
      nodeType="customInput"
      showInput={true}
      showFileInput={true}
      showDescription={false}
      outputHandles={outputHandles}
    />
  );
};

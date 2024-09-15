import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { selector } from "./types";

function App() {
    const {
    nodes,
    edges,
  } = useStore(selector, shallow);
  return (
    <div
      style={{
        backgroundColor: "#000",
        height: "100vh",
        width: "100vw",
      }}
    >
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton nodes={nodes} edges={edges}/>
    </div>
  );
}

export default App;

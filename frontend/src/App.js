import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
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
      <SubmitButton />
    </div>
  );
}

export default App;

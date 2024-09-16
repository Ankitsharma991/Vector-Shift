import { DraggableNode } from '../draggableNode';
import { selector } from '../constant/types';
import { SubmitButton } from "./submit";
import { useStore } from "../services/store";
import { shallow } from "zustand/shallow";

export const PipelineToolbar = () => {

  const { nodes, edges } = useStore(selector, shallow);

    return (
        <div style={{  backgroundColor: "#110928", height: "10vh", display: "flex", justifyContent: "space-between", paddingTop: "10px"}}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='custom' label='Custom Node' />
            </div>
            <div>
                <SubmitButton nodes={nodes} edges={edges} />
            </div>
        </div>
    );
};

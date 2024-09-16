import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalComponent = (props)=> {
  return (
    <>

      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Pipeline Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <span style={{fontWeight: 800}}>No. of Nodes: </span>{props.data.num_nodes}
          </div>
          <div>
            <span style={{fontWeight: 800}}>No. of Edges: </span>{props.data.num_edges}
          </div>
          <div>
            {props.data.is_dag ? "This is a DAG (Directed Acyclic Graph)!" : "This isn't a DAG (Directed Acyclic Graph)!"}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}
            style={{
              backgroundColor: "#110928"
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

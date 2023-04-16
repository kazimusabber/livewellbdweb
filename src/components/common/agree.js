import React,{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
export default function Agree({status=false}) {
  const [show, setShow] = useState(status);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose}>
              Close
            </button>
            
              <p style={{border: "2px solid #80808073",textAlign: "center",padding: "10px",borderRadius: "10px"}}><span>{"NEXT"}</span></p>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }

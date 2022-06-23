import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Flow from './flow';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import initialNodes from './nodes.js';
import initialEdges from './edges.js';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <main style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div id="node-flows" style={{ width: "95%", height: "50vh", border: "0.5px solid black" }}>
          <Flow handleShow={handleShow} initialNodes={initialNodes} initialEdges={initialEdges} />
        </div>
      </main>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Node name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Node name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Container>
            <Row>
              <Col >
                <Button variant="danger" onClick={handleClose}>
                  Delete Node
                </Button>
              </Col>
              <Col >
                <Button variant="success" onClick={handleClose}>
                  Save Node
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;

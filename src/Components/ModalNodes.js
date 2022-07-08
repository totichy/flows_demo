import React, { useContext } from 'react';
import { NodeContext } from '../Contexts/NodeContext.js';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const ModalNodes = ({ nodeId, show, handleClose }) => {

    const { nodes, deleteNode } = useContext(NodeContext);

    return (
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
                            <Button variant="danger" onClick={() => { deleteNode(nodeId); handleClose(); }}>
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
    );
};

export default ModalNodes;
import React, { useState, useContext } from 'react';
import { NodeContext } from '../Contexts/NodeContext.js';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';

const ModalNodes = ({ node, show, handleClose }) => {

    const { nodes, deleteNode } = useContext(NodeContext);


    const [updatedNode, setUpdatedNode] = useState();

    useEffect(() => {
        setUpdatedNode(node);
    }, [node]);

    const handleUpdateNode = (e) => {
        e.preventDefault();
        setUpdatedNode((prev) => ({ ...prev, data: { ...node.data, label: e.target.value } }));
        console.log(updatedNode.data.label);
    };


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Node name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Zadejte název uzlu: </Form.Label>
                        <Form.Control
                            type='text'
                            id='name'
                            value={updatedNode?.data?.label}
                            placeholder='Název'
                            onChange={handleUpdateNode}
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Container>
                    <Row>
                        <Col >
                            <Button variant="danger" onClick={() => { deleteNode(updatedNode.id); handleClose(); }}>
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
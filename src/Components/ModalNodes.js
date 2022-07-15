import React, { useContext } from 'react';
import { NodeContext } from '../Contexts/NodeContext.js';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const ModalNodes = ({ node, setNode, show, handleClose }) => {

    const { updateNode, deleteNode } = useContext(NodeContext);

    const handleUpdateNode = (e) => {
        e.preventDefault();
        setNode((prev) => ({ ...prev, data: { ...node.data, label: e.target.value } }));
    };


    return (
        <>
            {node && <Modal show={show} onHide={handleClose}>
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
                                value={node.data.label}
                                placeholder='Název'
                                onChange={handleUpdateNode}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <Row>
                            <Col >
                                <Button variant="danger" onClick={() => { deleteNode(node.id); handleClose(); }}>
                                    Delete Node
                                </Button>
                            </Col>
                            <Col >
                                <Button variant="success" onClick={() => { updateNode(node); handleClose(); }}>
                                    Save Node
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>}
        </>
    );
};

export default ModalNodes;
import React, { useContext } from 'react';
import { NodeContext } from '../Contexts/NodeContext.js';

import Node from './Node';

import Modal from 'react-bootstrap/Modal';

const ModalEdges = ({ show, handleClose, edgeId }) => {

    const { apiNodes } = useContext(NodeContext);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Node list</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {apiNodes.map((node) => {
                    return <Node key={node.id} {...node} edgeId={edgeId} handleClose={handleClose} />;
                })}
            </Modal.Body>
        </Modal>
    );
};

export default ModalEdges;
import React from 'react';
import { useState, useCallback, useContext } from 'react';
import { NodeContext } from './Contexts/NodeContext.js';

import ReactFlow, { MiniMap, Controls, applyEdgeChanges, applyNodeChanges, Background } from 'react-flow-renderer';

import { CustomEdge } from './ButtonEdge.js';
import ModalNodes from "./Components/ModalNodes";

const edgeTypes = {
    buttonedge: CustomEdge,
};


function Flow({ onConnect }) {
    const { edges, setEdges } = useContext(NodeContext);
    const { nodes, setNodes } = useContext(NodeContext);

    const [nodeId, setNodeId] = useState(null);

    const getNodeId = (e) => {
        setNodeId(e.target.getAttribute("data-id"));
    };

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={(e) => { getNodeId(e); handleShow(); }}
                edgeTypes={edgeTypes}
                fitView
            >
                {/* <MiniMap /> */}
                <Controls />
                <Background style={{ background: "#777494" }} />
            </ReactFlow>
            <ModalNodes show={show} handleClose={handleClose} nodeId={nodeId} />
        </>
    );
};

export default Flow;
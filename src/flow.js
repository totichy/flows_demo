import React from 'react';
import { useCallback, useState, useContext } from 'react';
import { NodeContext } from './Contexts/NodeContext.js';

import ReactFlow, { MiniMap, Controls, applyEdgeChanges, applyNodeChanges, Background } from 'react-flow-renderer';

import { CustomEdge } from './ButtonEdge.js';

const edgeTypes = {
    buttonedge: CustomEdge,
};


function Flow({ onConnect, initialEdges, handleShow }) {

    const { nodes, setNodes } = useContext(NodeContext);

    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    const dateNode = () => {
        setNodes(prev => [...prev, {
            id: (nodes.length + 1).toString(),
            data: {
                label: `Node ${nodes.length + 1}`
            },
            position: { x: nodes[nodes.length - 1].position.x + 200, y: 0 },
        }]);
    };

    return (
        <>
            <button onClick={dateNode}>Node</button>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={handleShow}
                edgeTypes={edgeTypes}
                fitView
            >
                {/* <MiniMap /> */}
                <Controls />
                <Background style={{ background: "#777494" }} />
            </ReactFlow>
        </>
    );
};

export default Flow;
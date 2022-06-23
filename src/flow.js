import React from 'react';
import { useCallback, useState } from 'react';

import ReactFlow, { MiniMap, Controls, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';


function Flow({ onConnect, initialNodes, initialEdges }) {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    const addNode = () => {


        setNodes(prev => [...prev, {
            id: (nodes.length + 1).toString(),
            data: { label: 'new node' },
            position: { x: nodes[nodes.length - 1].position.x + 200, y: 0 },
        }]);
        console.log(nodes);
    };


    return (
        <>
            <button onClick={addNode}>add Node</button>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                {/* <MiniMap /> */}
                <Controls />
            </ReactFlow>
        </>
    );
};

export default Flow;
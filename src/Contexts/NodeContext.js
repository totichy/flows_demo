import React, { createContext, useState } from "react";

import initialNodes from '../Data/nodes.js';
import initialEdges from '../Data/edges.js';
import initialApiNodes from '../Data/apiNodes.js';

import getNodesMatrix from "../Helpers/getNodesMatrix.js";



export const NodeContext = createContext();

const NodeContextProvider = (props) => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [apiNodes, setApiNodes] = useState(initialApiNodes);

    const addNode = (nodeId, edgeId) => {

        nodes.sort((a, b) => a.id - b.id);

        let nodeLeft = Number(edgeId.charAt(1));

        const apiNode = apiNodes.find(node => node.id === nodeId);
        const arrayNodesLeft = nodes.slice(0, nodeLeft);
        const arrayNodesRight = nodes.slice(nodeLeft);

        let modifiedNodesRight = arrayNodesRight.map(node => (
            { ...node, position: { ...node.position, x: node.position.x + 200 } }
        ));

        apiNode.position.x = arrayNodesLeft[arrayNodesLeft.length - 1].position.x + 200;

        let allNodes = [...arrayNodesLeft, apiNode, ...modifiedNodesRight].map((node, index) => (
            { ...node, id: (index + 1).toString() }
        ));

        const finalNodes = getNodesMatrix(allNodes, 5);

        setEdges(prev => [...prev, { id: `e${nodes.length}-${nodes.length + 1}`, source: `${nodes.length}`, target: `${nodes.length + 1}`, animated: true, type: 'buttonedge' }]);

        setNodes(finalNodes);
    };

    const deleteNode = (nodeId) => {
        nodes.sort((a, b) => a.id - b.id);

        const arrayNodesLeft = nodes.slice(0, nodeId - 1);
        const arrayNodesRight = nodes.slice(nodeId);

        const allNodes = [...arrayNodesLeft, ...arrayNodesRight].map((node, index) => (
            { ...node, id: (index + 1).toString() }
        ));

        const finalNodes = getNodesMatrix(allNodes, 5);

        let deleteEdgeIndex = edges.findIndex((edge) => edge.source === nodeId);

        const arrayEdgesLeft = edges.slice(0, deleteEdgeIndex);
        const arrayEdgesRight = edges.slice(deleteEdgeIndex + 1);

        if (arrayEdgesRight.length > 0) {
            let modifiedEdgesRight = arrayEdgesRight.map(edge => {
                let source = (Number(edge.source) - 1).toString();
                let target = (Number(edge.target) - 1).toString();
                return { id: `e${source}-${target}`, source: `${source}`, target: `${target}`, animated: true, type: 'buttonedge' };
            });
            setEdges([...arrayEdgesLeft, ...modifiedEdgesRight]);
        } else {
            setEdges([...arrayEdgesLeft]);
        };

        setNodes(finalNodes);

    };

    return (
        <NodeContext.Provider
            value={{ edges, setEdges, nodes, setNodes, apiNodes, setApiNodes, addNode, deleteNode }}
        >
            {props.children}
        </NodeContext.Provider>
    );
};

export default NodeContextProvider;
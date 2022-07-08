import React, { createContext, useState } from "react";

import initialNodes from '../Data/nodes.js';
import initialEdges from '../Data/edges.js';
import initialApiNodes from '../Data/apiNodes.js';



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

        if (allNodes.length > 5) {
            //const arrayNodesLeft = nodes.slice(0, 5);
            allNodes[5].position.x = 0;
            allNodes[5].position.y = 120;
            // let modifiedNodesRight = arrayNodesRight.map(node => (
            //     { ...node, position: { ...node.position, y: -50 } }
            // ));
            // allNodes = [...arrayNodesLeft, ...modifiedNodesRight];
        }

        if (allNodes.length > 10) {
            allNodes[10].position.x = 0;
            allNodes[10].position.y = 240;
        }

        setEdges(prev => [...prev, { id: `e${nodes.length}-${nodes.length + 1}`, source: `${nodes.length}`, target: `${nodes.length + 1}`, animated: true, type: 'buttonedge' }]);

        setNodes(allNodes);
    };

    const deleteNode = (nodeId) => {
        nodes.sort((a, b) => a.id - b.id);

        const arrayNodesLeft = nodes.slice(0, nodeId - 1);
        const arrayNodesRight = nodes.slice(nodeId);

        let allNodes = [...arrayNodesLeft, ...arrayNodesRight].map((node, index) => (
            { ...node, id: (index + 1).toString() }
        ));

        const getNodesMatrix = (arr, size) => {

            const temporaryNodesMatrix = [];
            for (let i = 0; i < temporaryNodesMatrix.length; i += size) {
                temporaryNodesMatrix.push(arr.slice(i, i + size));
            }

            const finalNodesMatrix = [];

            for (let i = 0; i < temporaryNodesMatrix.length; i++) {
                for (let j = 0; j < temporaryNodesMatrix[i].length; j++) {
                    if (temporaryNodesMatrix[i][j] === undefined) continue;
                    temporaryNodesMatrix[i][j].position.x = j * 200;
                    temporaryNodesMatrix[i][j].position.y = i * 120;

                    finalNodesMatrix.push(temporaryNodesMatrix[i][j]);
                }
            }
        };

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
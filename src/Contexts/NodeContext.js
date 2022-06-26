import React, { createContext, useState } from "react";

import initialNodes from '../Data/nodes.js';
import initialEdges from '../Data/edges.js';
import initialApiNodes from '../Data/apiNodes.js';

export const NodeContext = createContext();

const NodeContextProvider = (props) => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [apiNodes, setApiNodes] = useState(initialApiNodes);

    const addNode = (evt, id) => {
        evt.stopPropagation();
        console.log(id);

    };


    return (
        <NodeContext.Provider
            value={{ nodes, setNodes, edges, setEdges, apiNodes, setApiNodes, addNode }}
        >
            {props.children}
        </NodeContext.Provider>
    );
};

export default NodeContextProvider;
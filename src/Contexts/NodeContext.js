import React, { createContext, useState, useEffect } from "react";

import initialNodes from '../Data/nodes.js';

export const NodeContext = createContext();

const NodeContextProvider = (props) => {
    const [nodes, setNodes] = useState(initialNodes);


    return (
        <NodeContext.Provider
            value={{ nodes, setNodes }}
        >
            {props.children}
        </NodeContext.Provider>
    );
};

export default NodeContextProvider;
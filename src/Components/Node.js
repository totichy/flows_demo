import React, { useContext } from 'react';
import { NodeContext } from '../Contexts/NodeContext.js';

const Node = (props) => {

    const { addNode } = useContext(NodeContext);

    return (
        <div className="">
            <div onClick={() => { addNode(props.id, props.edgeId); props.handleClose(); }} className="api-node btn">{props.data.label}</div>
        </div>
    );
};

export default Node;
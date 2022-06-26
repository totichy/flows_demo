import React from 'react';

const Node = (node) => {

    return (
        <div className="">
            <div onClick={onNodeClick} className="apiNode btn">Node</div>
        </div>
    );
};

export default Node;
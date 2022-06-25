import React, { useContext } from 'react';
import { getBezierPath, getEdgeCenter, getMarkerEnd } from 'react-flow-renderer';
import { NodeContext } from './Contexts/NodeContext.js';

import './index.css';

export const CustomEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
}) => {

    const edgePath = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });
    const [edgeCenterX, edgeCenterY] = getEdgeCenter({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    const foreignObjectSize = 40;

    const onEdgeClick = (evt, id) => {
        evt.stopPropagation();

        console.log(nodes);
        alert(`remove ${id}`);
    };


    const { nodes, setNodes } = useContext(NodeContext);

    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
            />
            <foreignObject
                width={foreignObjectSize}
                height={foreignObjectSize}
                x={edgeCenterX - foreignObjectSize / 2}
                y={edgeCenterY - foreignObjectSize / 4}
                className="edgebutton-foreignobject"
                requiredExtensions="http://www.w3.org/1999/xhtml"
            >
                <section>
                    <button className="edgebutton" onClick={(event) => onEdgeClick(event, id)}>
                        +
                    </button>
                </section>
            </foreignObject>
        </>
    );
};

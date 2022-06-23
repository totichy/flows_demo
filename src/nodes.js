import "./index.css";

import "./App.css";

export default [
    {
        id: '1',
        sourcePosition: 'right',
        type: 'input',
        className: "node",
        data: { label: 'Start' },
        position: { x: 0, y: 0 },
    },

    {
        id: '2',
        sourcePosition: 'right',
        targetPosition: 'left',
        color: "#262442",
        data: { label: "Flow 1" },
        position: { x: 200, y: 0 },
        draggable: false,
    },
    {
        id: '3',
        type: 'output',
        targetPosition: 'left',
        color: "#262442",
        data: { label: 'End' },
        position: { x: 400, y: 0 },
    },
];

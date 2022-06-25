let nodeStyle = {
    background: "#262442",
    color: "#fff",
    boxShadow: "3px 3px 7px #000"
};

export default [
    {
        id: '1',
        sourcePosition: 'right',
        type: 'input',
        style: nodeStyle,
        data: { label: 'Start' },
        position: { x: 0, y: 0 },
    },

    {
        id: '2',
        sourcePosition: 'right',
        targetPosition: 'left',
        style: nodeStyle,
        data: { label: "Flow 1" },
        position: { x: 200, y: 0 },
        draggable: false,
    },
    {
        id: '3',
        type: 'output',
        targetPosition: 'left',
        style: nodeStyle,
        data: { label: 'End' },
        position: { x: 400, y: 0 },
    },
];

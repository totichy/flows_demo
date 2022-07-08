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
        style: {
            background: "#262442",
            color: "#fff",
            boxShadow: "3px 3px 7px #000",
            opacity: "0.8"
        },
        data: { label: 'Start' },
        position: { x: 0, y: 0 },
    },

    // {
    //     id: '2',
    //     sourcePosition: 'right',
    //     targetPosition: 'left',
    //     style: nodeStyle,
    //     data: { label: "Flow 1" },
    //     position: { x: 200, y: 0 },
    // },
    {
        id: '2',
        type: 'output',
        targetPosition: 'left',
        style: {
            background: "#262442",
            color: "#fff",
            boxShadow: "3px 3px 7px #000",
            opacity: "0.8"
        },
        data: { label: 'Konec' },
        position: { x: 200, y: 0 },
    },
];

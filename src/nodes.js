export default [
    {
        id: '1',
        sourcePosition: 'right',
        type: 'input',
        data: { label: 'Start' },
        position: { x: 0, y: 0 },
    },

    {
        id: '2',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Flow 1" },
        position: { x: 200, y: 0 },
        dragable: false,
    },
    {
        id: '3',
        type: 'output',
        data: { label: 'End' },
        position: { x: 400, y: 0 },
    },
];

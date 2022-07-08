const getNodesMatrix = (arr, size) => {
    const temporaryNodesMatrix = [];
    for (let i = 0; i < arr.length; i += size) {
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
    return finalNodesMatrix;
};

export default getNodesMatrix;
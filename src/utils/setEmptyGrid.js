module.exports = function setEmptyGrid(numRows, numCols) {
    const rows = [];
    for (let i=0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows
}
import React from 'react';
import styled from 'styled-components';

const CellDiv = styled.div`
    height: 24px;
    width: 24px;
    border: 1px solid black;
    margin-left: -1px;
    margin-bottom: -1px;
    background-color: ${props => props.color};

    &:hover {
        background-color: red;
        opacity: 0.5;
    }
`

const Cell = ({grid, setGrid, r, c}) => {
    const selectCell = () => {
        let gridCopy = [...grid]
        gridCopy[r][c] = grid[r][c] ? 0 : 1;
        setGrid(gridCopy)
    }

    return (
        <CellDiv onClick={selectCell} color={grid[r][c] ? "red" : "white"} >
        </CellDiv>
    )
}

export default Cell;
import React from 'react';
import styled from 'styled-components';

const CellDiv = styled.div`
    height: ${props => props.size};
    width: ${props => props.size};
    border-radius: 50%;
    background-color: ${props => props.color};

    &:hover {
        background-color: ${props => props.hover};
    }
`

const colors = [
    '#7400B8',
    '#5E60CE',
    '#06AED5',
    '#2382BE',
    '#30C5FF',
    '#56CFE1',
    '#64DFDF',
    '#72EFDD',
    '#80FFDB',
    '#FF84E8',
    '#FFA9E7'
]

const getRandomColor = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const Cell = ({grid, setGrid, r, c, size, running}) => {
    const selectCell = () => {
        if (running) {
            return 
        } else {
            let gridCopy = [...grid]
            gridCopy[r][c] = grid[r][c] ? 0 : 1;
            setGrid(gridCopy)
        }
    }

    return (
        <CellDiv 
            onClick={selectCell} 
            color={grid[r][c] ? getRandomColor(colors) : "#291D3F"} 
            size={size}
            hover={running ? "#291D3F" : "#8F0075"}
        />
    )
}

export default Cell;
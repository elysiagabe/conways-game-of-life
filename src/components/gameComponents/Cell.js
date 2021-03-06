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

const getDeadColor = (hidden) => {
    if (hidden) {
        return "#1A0C31"
    } else {
        return "#291D3F"
    }
}

const Cell = ({grid, setGrid, r, c, size, running, hideGrid}) => {
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
            color={grid[r][c] ? getRandomColor(colors) : getDeadColor(hideGrid)} 
            size={size}
            hover={running ? "#291D3F" : "#FF84E8"}
        />
    )
}

export default Cell;
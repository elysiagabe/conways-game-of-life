import React, { useState } from 'react';
import styled from 'styled-components';
// utils
import setEmptyGrid from '../../utils/setEmptyGrid';
// components
import Cell from './Cell';


const GridDiv = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: ${props => props.repeat};
`

const Grid = () => {
    const [numRows, setNumRows] = useState(25);
    const [numCols, setNumCols] = useState(25);

    const [grid, setGrid] = useState(setEmptyGrid(numRows, numCols));

    return (
        <GridDiv repeat={`repeat(${numCols}, 24px)`}>
            {grid.map((rows, r) => 
                rows.map((col, c) => (
                    <Cell
                        key={`${r}-${c}`}
                    />
                ))
            )}
        </GridDiv>
    )

}

export default Grid;
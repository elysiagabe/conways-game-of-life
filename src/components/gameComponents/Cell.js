import React from 'react';
import styled from 'styled-components';

const CellDiv = styled.div`
    height: 24px;
    width: 24px;
    border: 1px solid black;

    &:hover {
        background-color: lightskyblue;
    }
`

const Cell = () => {
    return (
        <CellDiv>
        </CellDiv>
    )
}

export default Cell;
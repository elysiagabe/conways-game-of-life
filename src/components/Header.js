import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 48px;
    font-weight: 600;
    text-shadow: 2px 2px #FF84E8;
    margin-top: 56px;
    margin-bottom: 28px;
`

const Header = () => {
    return (
        <Title>Conway's Game of Life</Title>
    )
}

export default Header;
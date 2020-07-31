import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const SizeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    margin: 4px auto;
`

const SizeTitle = styled.h3`
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    margin-right: 20px;
`

const RadioInput = styled.input`
    position: fixed;
    opacity: 0;
    pointer-events: none;

    :checked+label {
        background-color: #8E00E0;
        color: #fff;
    }
`

const RadioLabel = styled.label`
    font-family: 'MuseoModerno', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    border: 1px solid #8E00E0;
    border-radius: 4px;
    padding: 4px 10px;
    margin: 8px;
    background-color: #1A0C31;
    color: #8E00E0;
    transition: background-color .2s, color .2s;

    &:hover, &:focus {
        background-color: #8E00E0;
        color: #fff;
    }
`

const SizeConfig = ({ setNumRows, setNumCols, setCellSize }) => {

    const sizeOptions = {
        1: [10, "50px"],
        2: [25, "20px"],
        3: [50, "10px"]
    }

    const handleSizeChange = (e) => {
        setNumCols(_.get(sizeOptions, [e.target.value, 0]))
        setNumRows(_.get(sizeOptions, [e.target.value, 0]))
        setCellSize(_.get(sizeOptions, [e.target.value, 1]))
    }

    return (
        <SizeDiv>
            <SizeTitle>Choose size </SizeTitle>
            <RadioInput
                type="radio"
                name="size"
                id="10x10"
                value="1"
                onChange={handleSizeChange}
            />
            <RadioLabel htmlFor="10x10">10 x 10</RadioLabel>

            <RadioInput
                type="radio"
                name="size"
                id="25x25"
                value="2"
                defaultChecked
                onChange={handleSizeChange}
            />
            <RadioLabel htmlFor="25x25">25 x 25</RadioLabel>

            <RadioInput
                type="radio"
                name="size"
                id="50x50"
                value="3"
                onChange={handleSizeChange}
            />
            <RadioLabel htmlFor="50x50">50 x 50</RadioLabel>
        </SizeDiv>
    )
}

export default SizeConfig;
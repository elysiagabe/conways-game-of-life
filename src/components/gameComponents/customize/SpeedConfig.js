import React from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SpeedDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    margin: 4px auto;
    padding: 16px 0;
`

const SpeedTitle = styled.h3`
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    margin-right: 20px;
`

const style = {width: 400}

const SpeedConfig = ({ intervalSpeed, setIntervalSpeed }) => {

    const marks = {
        1: 'Fast',
        1500: 'Slow'
    }

    const handleChange = value => {
        setIntervalSpeed(value)
    }

    return (
        <SpeedDiv>
            <SpeedTitle>Adjust Speed</SpeedTitle>
            <div style={style}>
                <Slider 
                    onChange={handleChange}
                    value={intervalSpeed}
                    reverse
                    min={1}
                    max={1500}
                    railStyle={{ backgroundColor: '#4E007A' }}
                    handleStyle={{
                        borderColor: '#FFF',
                        backgroundColor: '#FFF',
                    }}
                    trackStyle={{ backgroundColor: '#4E007A' }}
                    marks={marks}
                />
            </div>
        </SpeedDiv>
    )
}

export default SpeedConfig;
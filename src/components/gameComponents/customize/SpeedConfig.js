import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const style = {width: 600, margin: 50}

const SpeedConfig = ({ intervalSpeed, setIntervalSpeed }) => {
    // const [value, setValue] = useState(500)

    const marks = {
        1: 'Fast',
        2500: 'Slow'
    }

    const handleChange = value => {
        setIntervalSpeed(value)
    }

    return (
        <div>
            Adjust the Speed:
            <div style={style}>
                <Slider 
                    onChange={handleChange}
                    value={intervalSpeed}
                    reverse
                    min={1}
                    max={2500}
                    railStyle={{ backgroundColor: 'red' }}
                    handleStyle={{
                        borderColor: 'pink',
                        backgroundColor: 'pink',
                    }}
                    trackStyle={{ backgroundColor: 'blue' }}
                    marks={marks}
                />
            </div>
        </div>
    )
}

export default SpeedConfig;
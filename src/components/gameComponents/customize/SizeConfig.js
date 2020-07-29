import React from 'react';
import _ from 'lodash';

const SizeConfig = ({ setNumRows, setNumCols, setCellSize}) => {

    const sizeOptions = {
        1: [10, "48.5px"],
        2: [25, "20px"],
        3: [50, "10.5px"]
    }

    const handleSizeChange = (e) => {
        setNumCols(_.get(sizeOptions, [e.target.value, 0]))
        setNumRows(_.get(sizeOptions, [e.target.value, 0]))
        setCellSize(_.get(sizeOptions, [e.target.value, 1]))
    }

    return (
        <div>
            Adjust the size: <br />
            <input
                type="radio"
                name="size"
                id="10x10"
                value="1"
                onChange={handleSizeChange}
            />
            <label htmlFor="10x10">10x10</label>
            <br />
            <br />

            <input
                type="radio"
                name="size"
                id="25x25"
                value="2"
                defaultChecked
                onChange={handleSizeChange}
            />
            <label htmlFor="25x25">25x25</label>
            <br />
            <br />

            <input
                type="radio"
                name="size"
                id="50x50"
                value="3"
                onChange={handleSizeChange}
            />
            <label htmlFor="50x50">50x50</label>
            <br />
            <br />
        </div>
    )
}

export default SizeConfig;
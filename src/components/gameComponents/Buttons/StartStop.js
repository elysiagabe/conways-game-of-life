import React, { useEffect } from 'react';

const StartStop = ({ running, setRunning, runSimulation }) => {

    const toggleRunning = () => {
        setRunning(!running)
    }

    // runs game logic on an interval
    useEffect(() => {
        let interval;
        if(running) {
            interval = setInterval(runSimulation, 100)
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running, runSimulation])



    return (
        <button onClick={toggleRunning}>{running ? "Stop" : "Start"}</button>
    )
}

export default StartStop;
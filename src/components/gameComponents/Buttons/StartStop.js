import React, { useEffect } from 'react';

const StartStop = ({ running, setRunning, runSimulation, intervalSpeed }) => {

    const toggleRunning = () => {
        setRunning(!running)
    }

    // runs game logic on an interval
    useEffect(() => {
        let interval;
        if(running) {
            interval = setInterval(runSimulation, intervalSpeed)
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running, runSimulation, intervalSpeed])



    return (
        <button onClick={toggleRunning}>{running ? "Stop" : "Start"}</button>
    )
}

export default StartStop;
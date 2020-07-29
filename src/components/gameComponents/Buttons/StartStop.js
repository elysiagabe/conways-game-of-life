import React, { useEffect } from 'react';

const StartStop = ({ running, setRunning, runSimulation }) => {

    const toggleRunning = () => {
        setRunning(!running)
    }

    useEffect(() => {
        let interval;
        if(running) {
            interval = setInterval(runSimulation, 2000)
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running])



    return (
        <button onClick={toggleRunning}>{running ? "Stop" : "Start"}</button>
    )
}

export default StartStop;
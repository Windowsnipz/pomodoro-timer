import React, { useState, useEffect } from 'react';

function Clock({ sessionLength, breakLength, changeSessionLength, changeBreakLength }) { 
        const [minutes, setMinutes] = useState(sessionLength);
        const [seconds, setSeconds] = useState(0);
        const [isActive, setIsActive] = useState(false); // track if timer active
        const [isSession, setIsSession] = useState(true); // track if it's session time
        const [audio] = useState(new Audio('./w3-effect.mp3'));

    // Update minutes and seconds when sessionLength or breakLength changes
    useEffect(() => {
        setMinutes(sessionLength);
        setSeconds(0);
        setIsSession(true); // reset to session when length changes
    }, [sessionLength, breakLength]);

    useEffect(() => {
        let timer;

        if (isActive) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        // Switch between session and break
                        audio.play();
                        setIsSession(!isSession);
                        setMinutes(isSession ? breakLength : sessionLength);
                        setSeconds(0);
                    } else {
                        setMinutes((prevMinutes) => prevMinutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                }
            }, 1000) // 1 second per interval
        }

        // Clean up interval on component unmount or stopping the timer
        return () => clearInterval(timer);
    }, [isActive, seconds, minutes, sessionLength, breakLength, isSession]);


    const reset = () => {
        setIsActive(false); // stops timer;
        setMinutes(sessionLength);
        setSeconds(0);
        setIsSession(true);
        changeSessionLength(25);
        changeBreakLength(5);
    }

    const toggleTimer = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div>
                <h3 id="timer-label">{isSession ? 'Session' : 'Break'}</h3>
                <h1 id="time-left">
                    {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds }
                </h1>
            </div>
            <div>
                <button id="start_stop" onClick={toggleTimer}>
                    {isActive ? 'Stop' : 'Start'}
                </button>
                <button id="reset" onClick={reset}>Reset</button>
            </div>
        </>
    );
}

export default Clock;
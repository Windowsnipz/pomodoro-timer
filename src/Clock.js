import React, { useState, useEffect } from 'react';

function Clock({ sessionLength, breakLength, changeSessionLength, changeBreakLength }) { 
        const [minutes, setMinutes] = useState(sessionLength);
        const [secoonds, setSeconds] = useState(0);
        const [isActive, setIsActive] = useState(false); // track if timer active
        const [isSesssion, setIsSession] = useState(true); // track if it's session time


    useEffect(() => {
        let timer;

        if (isActive) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        // Switch between session and break
                        alert('SESSION OVER');
                        setIsSession(!isSesssion);
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
    })


    const reset = () => {
        changeSessionLength(25);
        changeBreakLength(5);
    }

    const breakClockTicking = () => {

    }

    return (
        <>
            <div>
                <h3 id="timer-label">Session</h3>
                <h1 id="time-left">{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds }</h1>
            </div>
            <div>
                <button id="start_stop" onClick={sessionClockTicking}>Start/Stop</button>
                <button id="reset" onClick={reset}>Reset</button>
            </div>
        </>
    );
}

export default Clock;
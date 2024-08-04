import React from 'react';

function Clock({ sessionLength, breakLength, changeSessionLength, changeBreakLength }) { 
    
    let minutes = sessionLength;
    let seconds = 0;

    const reset = () => {
        changeSessionLength(25);
        changeBreakLength(5);
    }

    const sessionClockTicking = () => {

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
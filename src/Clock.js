import React from 'react';

function Clock({ sessionLength, breakLength, changeSessionLength, changeBreakLength }) { 

    const reset = () => {
        changeSessionLength(25);
        changeBreakLength(5);
    }

    return (
        <>
            <div>
                <h3 id="timer-label">Session</h3>
                <h1 id="time-left"></h1>
            </div>
            <div>
                <button id="start_stop">Start/Stop</button>
                <button id="reset" onClick={reset}>Reset</button>
            </div>
        </>
    );
}

export default Clock;
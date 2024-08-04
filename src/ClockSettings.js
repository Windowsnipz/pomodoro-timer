import React from 'react';

function ClockSettings({ sessionLength, breakLength, changeSessionLength, changeBreakLength }) {

    const sessionDecrement = () => {
        if (sessionLength > 1) {
            changeSessionLength(sessionLength - 1);
        } else {
            alert('Session length must be greater than 1 minute.');
        }
    }

    const sessionIncrement = () => {
        if (sessionLength < 60) {
            changeSessionLength(sessionLength + 1);
        } else {
            alert('Session length must be less than 60 minutes.');
        }
    }

    const breakDecrement = () => {
        if (breakLength > 1) {
            changeBreakLength(breakLength - 1);
        } else {
            alert('Break length must be greater than 1 minute.');
        }
    }

    const breakIncrement = () => {
        if (breakLength < 60) {
            changeBreakLength(breakLength + 1);
        } else {
            alert('Break length must be less than 60 minutes.');
        }
    }

    return (
        <>
            <h1>Pomodoro Timer</h1>
            <div id="break-label">
                <div>
                    <h3>Break Length</h3>
                </div>
                <div>
                    <button id="break-decrement" onClick={breakDecrement}>Decrement</button>
                    <h3 id="break-length">{breakLength}</h3>
                    <button id="break-increment" onClick={breakIncrement}>Increment</button>
                </div>
            </div>
            <div id="session-label">
                <div>
                    <h3>Session Length</h3>
                </div>
                <div>
                    <button id="session-decrement" onClick={sessionDecrement}>Decrement</button>
                    <h3 id="session-length">{sessionLength}</h3>
                    <button id="session-increment" onClick={sessionIncrement}>Increment</button>
                </div>
            </div>
        </>
    );
}

export default ClockSettings;
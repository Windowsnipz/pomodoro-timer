import React from 'react';

function ClockSettings({ sessionLength, breakLength, changeSessionLength, changeBreakLength }) {

    const sessionDecrement = () => {
        changeSessionLength(sessionLength - 1);
    }

    const sessionIncrement = () => {
        changeSessionLength(sessionLength + 1);
    }

    const breakDecrement = () => {
        changeBreakLength(breakLength - 1);
    }

    const breakIncrement = () => {
        changeBreakLength(breakLength + 1);
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
                    <button id="session-increment" onClick={sessionIncrement}>increment</button>
                </div>
            </div>
        </>
    );
}

export default ClockSettings;
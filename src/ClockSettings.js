import React from 'react';

function ClockSettings({ defaultSessionLength, defaultBreakLength, changeSessionLength, changeBreakLength }) {

    const sessionDecrement = () => {
        changeSessionLength(defaultSessionLength - 1);
    }

    const sessionIncrement = () => {
        changeSessionLength(defaultSessionLength + 1);
    }

    const breakDecrement = () => {
        changeBreakLength(defaultBreakLength - 1);
    }

    const breakIncrement = () => {
        changeBreakLength(defaultBreakLength + 1);
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
                    <h3 id="break-length">{defaultBreakLength}</h3>
                    <button id="break-increment" onClick={breakIncrement}>Increment</button>
                </div>
            </div>
            <div id="session-label">
                <div>
                    <h3>Session Length</h3>
                </div>
                <div>
                    <button id="session-decrement" onClick={sessionDecrement}>Decrement</button>
                    <h3 id="session-length">{defaultSessionLength}</h3>
                    <button id="session-increment" onClick={sessionIncrement}>increment</button>
                </div>
            </div>
        </>
    );
}

export default ClockSettings;
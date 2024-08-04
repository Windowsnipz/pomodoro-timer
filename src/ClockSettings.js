import React from 'react';

function ClockSettings({ defaultSessionLength, defaultBreakLength, changeSessionLength, changeBreakLength }) {
    return (
        <>
            <h1>Pomodoro Timer</h1>
            <div id="break-label">
                <div>
                    <h3>Break Length</h3>
                </div>
                <div>
                    <button id="break-decrement">Decrement</button>
                    <h3 id="break-length"></h3>
                    <button id="break-increment">Increment</button>
                </div>
            </div>
            <div id="session-label">
                <div>
                    <h3>Session Length</h3>
                </div>
                <div>
                    <button id="session-decrement">Decrement</button>
                    <h3 id="session-length"></h3>
                    <button id="session-increment">increment</button>
                </div>
            </div>
        </>
    );
}

export default ClockSettings;
import React from 'react';

function Clock() { 
    return (
        <>
            <div>
                <h1>Pomodor Timer</h1>
            </div>
            <div id="clock-wrapper">
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
                <div>
                    <h3 id="timer-label">Session</h3>
                    <h1 id="time-left"></h1>
                </div>
                <div>
                    <button id="start_stop">Start/Stop</button>
                    <button id="reset">Reset</button>
                </div>
            </div>
        </>
    );
}

export default Clock;
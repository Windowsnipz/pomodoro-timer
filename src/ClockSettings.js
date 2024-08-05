import React from 'react';

function ClockSettings({ sessionLength, breakLength, changeSessionLength, changeBreakLength }) {

    const sessionDecrement = () => {
        if (sessionLength > 1) {
            changeSessionLength(sessionLength - 1);
        }
    }

    const sessionIncrement = () => {
        if (sessionLength < 60) {
            changeSessionLength(sessionLength + 1);
        }
    }

    const breakDecrement = () => {
        if (breakLength > 1) {
            changeBreakLength(breakLength - 1);
        }
    }

    const breakIncrement = () => {
        if (breakLength < 60) {
            changeBreakLength(breakLength + 1);
        }
    }

    return (
        <div class="box">
            <h1>Pomodoro Timer</h1>
            <div id="break-label">
                <div>
                    <h3>Break Length</h3>
                </div>
                <div class="timer-settings">
                    <button id="break-decrement" class="btn" onClick={breakDecrement}>-</button>
                    <h3 id="break-length">{breakLength}</h3>
                    <button id="break-increment" class="btn" onClick={breakIncrement}>+</button>
                </div>
            </div>
            <div id="session-label">
                <div>
                    <h3>Session Length</h3>
                </div>
                <div class="timer-settings">
                    <button id="session-decrement" class="btn" onClick={sessionDecrement}>-</button>
                    <h3 id="session-length">{sessionLength}</h3>
                    <button id="session-increment" class="btn" onClick={sessionIncrement}>+</button>
                </div>
            </div>
        </div>
    );
}

export default ClockSettings;
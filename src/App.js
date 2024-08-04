import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import ClockSettings from './ClockSettings';
import Clock from './Clock';

function App() { // Reminder: put Navbar back in
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  return (
    <div className="App">
      <ClockSettings 
        sessionLength={sessionLength}
        breakLength={breakLength} 
        changeSessionLength={setSessionLength}
        changeBreakLength={setBreakLength}
        />
      <Clock 
        sessionLength={sessionLength}
        breakLength={breakLength} 
        changeSessionLength={setSessionLength}
        changeBreakLength={setBreakLength} 
        />
    </div>
  );
}

export default App;

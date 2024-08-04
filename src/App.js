import './App.css';
import Navbar from './Navbar';
import ClockSettings from './ClockSettings';
import Clock from './Clock';

function App() { // Reminder: put Navbar back in
  return (
    <div className="App">
      <ClockSettings />
      <Clock />
    </div>
  );
}

export default App;

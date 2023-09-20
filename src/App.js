import logo from './logo.svg';
import './App.css';

function App() {
  const text = Math.random();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <button>randomize</button>
      </header>
    </div>
  );
}

export default App;

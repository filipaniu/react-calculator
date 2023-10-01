import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import SecondComponent from "./SecondComponent";

function onButtonClick() {
    console.log("clicked ", Math.random());
}

function App() {
    const text = Math.random();

    return (
        <div className="App">
            <header className="App-header">
                <p>Pierwsza aplikacja</p>
            </header>
            <main>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>{text}</p>
                <Counter/>
                <SecondComponent/>
                <button onClick={onButtonClick}>randomize</button>
            </main>
            <footer>Footer</footer>
        </div>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import SecondComponent from "./SecondComponent";
import {useState} from "react"

function App() {
    const [randomNumber, setRandomNumber] = useState(Math.random());

    function onButtonClick() {
        console.log("clicked ", Math.random());
        setRandomNumber(Math.random());
    }

    return (
        // in HTML use class=...
        // in JSX use className=...
        <div className="App">
            <header className="App-header">
                <p>Pierwsza aplikacja</p>
            </header>
            <main>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>{randomNumber}</h1>
                <Counter/>
                <SecondComponent/>
                <button onClick={onButtonClick}>randomize</button>
                <h2>First section</h2>
                <p>Lorem ipsum dolor sit amet, <span className="highlight">consectetur</span> adipiscing elit.</p>
                <h2>Second chapter</h2>
                <p>Curabitur euismod dapibus ligula. </p>
                <h2>Example no 3</h2>
                <p>Sed hendrerit magna aliquet, <span className="highlight">egestas eros congue</span>, tincidunt erat.
                    Donec congue et urna vitae tristique.</p>
                <p>Quisque ut auctor lectus.</p>
                <h2>Nowy nagłówek</h2>
                <p>Ala ma kota</p>
            </main>
            <footer>Footer</footer>
        </div>
    );
}

export default App;

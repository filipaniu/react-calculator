import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import SecondComponent from "./SecondComponent";
import{useState} from "react"

function App() {
    const [randomNumber, setRandomNumber]  = useState(Math.random());

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
            </main>
            <footer>Footer</footer>
        </div>
    );
}

export default App;

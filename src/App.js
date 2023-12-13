import './App.css';
import {Container} from '@mui/material';
import {Grid} from "@mui/material"
import CalculatorAppBar from './components/CalculatorAppBar';
import {Routes, Route} from "react-router-dom";
import CalculatorPage from './components/pages/CalculatorPage';
import HomePage from './components/pages/HomePage';

function App() {

    return (
        <div className="App">
            <CalculatorAppBar></CalculatorAppBar>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/calculator' element={<CalculatorPage/>}/>
            </Routes>
            <footer></footer>
        </div>
    );
}

export default App;

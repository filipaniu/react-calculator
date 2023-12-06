import './App.css';
import {useState} from "react"
import {Container} from '@mui/material';
import {Grid} from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CubeCalc from "./components/CubeCalc";
import RotationalFigureCalc from './components/RotationalFigureCalc';
import CalculatorAppBar from './components/CalculatorAppBar';
import {Routes, Route} from "react-router-dom";
import CalculatorPage from './components/pages/CalculatorPage';
import HomePage from './components/pages/HomePage';

function App() {

    return (
        <div className="App">
            <CalculatorAppBar></CalculatorAppBar>
            <Container fixed={true}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Routes>
                            <Route exact path='/' element={<HomePage/>}/>
                            <Route exact path='/calculator' element={<CalculatorPage/>}/>
                        </Routes>
                    </Grid>
                </Grid>
                <footer></footer>
            </Container>
        </div>
    );
}

export default App;

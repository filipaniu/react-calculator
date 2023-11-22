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

function renderCalculator(figure) {
    if (figure == 'cone' || figure == 'cylinder') {
        return <RotationalFigureCalc figure={figure}/>
    } else if (figure == 'cube') {
        return <CubeCalc/>
    } else {
        return <p>Unsupported figure: {figure}</p>
    }
}

function App() {

    const [figure, setFigure] = useState('cylinder');

    return (
        <div className="App">
            <CalculatorAppBar></CalculatorAppBar>
            <Container fixed={true}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel>Figure</InputLabel>
                            <Select value={figure} label="Figure" onChange={event => setFigure(event.target.value)}>
                                <MenuItem value='cylinder'>Cylinder</MenuItem>
                                <MenuItem value='cone'>Cone</MenuItem>
                                <MenuItem value='cube'>Cube</MenuItem>
                            </Select>
                            {renderCalculator(figure)}
                        </FormControl>
                    </Grid>
                </Grid>
                <footer></footer>
            </Container>
        </div>
    );
}

export default App;

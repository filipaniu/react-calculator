import * as React from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {useState} from "react";
import RotationalFigureCalc from "../RotationalFigureCalc";
import CubeCalc from "../CubeCalc";
import {Container} from "@mui/material";

function renderCalculator(figure) {
    if (figure == 'cone' || figure == 'cylinder') {
        return <RotationalFigureCalc figure={figure}/>
    } else if (figure == 'cube') {
        return <CubeCalc/>
    } else {
        return <p>Unsupported figure: {figure}</p>
    }
}

export default function CalculatorPage() {

    const [figure, setFigure] = useState('cylinder');

    return <Container fixed={true}>
        <h2>Calculator</h2>
        <FormControl fullWidth>
            <InputLabel>Figure</InputLabel>
            <Select value={figure} label="Figure" onChange={event => setFigure(event.target.value)}>
                <MenuItem value='cylinder'>Cylinder</MenuItem>
                <MenuItem value='cone'>Cone</MenuItem>
                <MenuItem value='cube'>Cube</MenuItem>
            </Select>
        </FormControl>
        {renderCalculator(figure)}
    </Container>;
}

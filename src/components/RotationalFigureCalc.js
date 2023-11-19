import {Button, Card, CardContent, TextField} from "@mui/material";
import {Grid} from "@mui/material"
import {Box} from "@mui/material"
import {useEffect, useState} from "react";
import Formulas from "../Formulas";
import './Calc.css';


const figuresMap = {
    cone: {
        name: 'Cone',
        image: 'images/cone.png',
        volumeFormula: Formulas.getConeVolume,
        areaFormula: Formulas.getConeArea
    },
    cylinder: {
        name: 'Cylinder',
        image: 'images/cylinder.jpg',
        volumeFormula: Formulas.getCylinderVolume,
        areaFormula: Formulas.getCylinderArea
    }
}

function RotationalFigureCalc(props) {
    const [height, setHeight] = useState(0);
    const [radius, setRadius] = useState(0);
    const [volume, setVolume] = useState(null);
    const [area, setArea] = useState(null);
    let results = "";

    useEffect(() => {
            setVolume(null);
            setArea(null);
            setHeight(0);
            setRadius(0);
        }, [props]
    );

    function calculate() {
        const area = figuresMap[props.figure].areaFormula(height, radius);
        const volume = figuresMap[props.figure].volumeFormula(height, radius);
        setVolume(volume);
        setArea(area);
    }

    if (volume != null) {
        results = <Card>
            <CardContent>
                <b>Results</b>
                <p>Volume: {volume}</p>
                <p>Area: {area}</p>
            </CardContent>
        </Card>;
    }

    return <Box spacing="2" sx={{my: 2}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h2 style={{margin: 0}}>{figuresMap[props.figure].name}</h2>
                <img className="figure-image" src={figuresMap[props.figure].image}/>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth={true} label="height" type="number"
                           value={height} onChange={x => setHeight(parseInt(x.target.value))}
                           inputProps={{min: 0}}/>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth={true} label="radius" type="number"
                           value={radius} onChange={x => setRadius(parseInt(x.target.value))}
                           inputProps={{min: 0}}/>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={calculate} variant="contained" color="primary">Calculate</Button>
            </Grid>

            <Grid item xs={12}>{results}</Grid>
        </Grid>
    </Box>
}

export default RotationalFigureCalc;
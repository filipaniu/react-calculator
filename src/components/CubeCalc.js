import { Button, Card, CardContent, TextField } from "@mui/material";
import { Grid } from "@mui/material"
import { Box } from "@mui/material"
import { useState } from "react";
import Formulas from "../Formulas";
import './Calc.css';

function CubeCalc(){
    
    const [size, setSize] = useState(0);
    const [volume, setVolume] = useState(null);
    const [area, setArea] = useState(null);
    let results = "";

    function calculate() {
        const area = Formulas.getCubeArea(size);
        const volume = Formulas.getCubeVolume(size);
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

    return <Box spacing="2" sx={{ my: 2 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h2 style={{ margin: 0 }}>Cube</h2>
                <img className="figure-image" src="images/cube.jpeg"/>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth={true} label="size" type="number"
                    value={size} onChange={x => setSize(parseInt(x.target.value))}
                    inputProps={{min: 0}}/>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={calculate} variant="contained" color="primary">Calculate</Button>
            </Grid>
            <Grid item xs={12}>{results}</Grid>
        </Grid>
    </Box>
}

export default CubeCalc;
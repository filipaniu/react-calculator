import { Button, Card, CardContent, TextField } from "@mui/material";
import { Grid } from "@mui/material"
import { Box } from "@mui/material"
import { useState } from "react";
import Volumes from "../Volumes";

function CylinderCalc() {

    const [height, setHeight] = useState(0);
    const [radius, setRadius] = useState(0);
    const [volume, setVolume] = useState(null);
    let results = "";

    function calculate() {
        const volume = Volumes.getCylinderVolume(height, radius);
        setVolume(volume);
    }

    if (volume != null) {
        results = <Card>
            <CardContent>
                <b>Results</b>
                <p>Volume: {volume}</p>
            </CardContent>
        </Card>;
    }

    return <Box spacing="2" sx={{ my: 2 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h2 style={{ margin: 0 }}>Cylinder</h2>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth={true} label="height" type="number"
                    value={height} onChange={x => setHeight(x.target.value)} />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth={true} label="radius" type="number"
                    value={radius} onChange={x => setRadius(x.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={calculate} variant="contained" color="primary">Calculate</Button>
            </Grid>
            <Grid item xs={12}>{results}</Grid>
        </Grid>
    </Box>
}

export default CylinderCalc;
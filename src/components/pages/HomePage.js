import * as React from 'react';
import {Container, Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CalculateIcon from "@mui/icons-material/Calculate";
import Typography from "@mui/material/Typography";
import './HomePage.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from 'react-router-dom';

export default function HomePage() {
    return (<Container maxWidth={true} className="welcome">
        <Grid container>
            <Grid item xs={12}>
                <IconButton color="primary">
                    <CalculateIcon sx={{fontSize: 145}}/>
                </IconButton>
                <Typography variant="h2" sx={{flexGrow: 1}}>Geometric Calculator</Typography>
            </Grid>
            <Grid item xs={12}>
                <Link to="https://github.com/filipaniu/react-calculator">
                    <IconButton color="primary">
                        <GitHubIcon sx={{fontSize: 45}}/>
                    </IconButton>
                </Link>
                <Container className="copyRights">
                    <Typography>Developed by Filip Poreba</Typography>
                </Container>
            </Grid>
        </Grid>

    </Container>);

}

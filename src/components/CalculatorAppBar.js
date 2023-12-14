import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Box, Button, Container} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import {Link} from 'react-router-dom';
import './CalculatorAppBar.css';


export default function CalculatorAppBar() {
    return (
        <AppBar position="fixed">
            <Toolbar component={Container}>
                <Link to="http://localhost:3000" className="logoLink">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu">
                        <CalculateIcon sx={{fontSize: 45}}/>
                    </IconButton>
                </Link>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    Geometric Calculator
                </Typography>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, flexDirection: 'row-reverse'}}>
                    <Link to="/calculator">
                        <Button sx={{my: 2, color: 'white', display: 'block'}}>Calculator</Button>
                    </Link>
                    <Link to="/">
                        <Button sx={{my: 2, color: 'white', display: 'block'}}>Home</Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>

    );
}

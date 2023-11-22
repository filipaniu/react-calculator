import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

export default function CalculatorAppBar() {
  return (
        <AppBar position="fixed">
          <Toolbar component={Container}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu">
              <CalculateIcon sx={{fontSize:45}}/>
            </IconButton>
            <Typography variant="h6"sx={{ flexGrow: 1 }}>
              Geometric Calculator
            </Typography>
          </Toolbar>
        </AppBar>
  );
}

import './App.css';
import { useState } from "react"
import Button from '@mui/material/Button';
import { Container, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function App() {
    
    const figure = 'cylinder';

    return (
        <div className="App">
            <Container fixed={true}>
                <header className="App-header">
                    <h1>Geometric Calculator</h1>
                </header>
                <main>
                    <FormControl fullWidth>
                        <InputLabel>Figure</InputLabel>
                        <Select value={figure} label="Figure" onChange={x => console.log('event:',x)}>
                            <MenuItem value='cylinder'>Cylinder</MenuItem>
                            <MenuItem value='cone'>Cone</MenuItem>
                            <MenuItem value='cube'>Cube</MenuItem>
                        </Select>
                    </FormControl>
                </main>
                <footer></footer>
            </Container>
        </div>
    );
}

export default App;

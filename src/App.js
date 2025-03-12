import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Box } from '@mui/material'; // Import Button and Box

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Router>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button component={Link} to="/login" variant="outlined" sx={{ mr: 2 }}>
                        Login
                    </Button>
                    <Button component={Link} to="/register" variant="outlined">
                        Register
                    </Button>
                </Box>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Login />} /> {/* Default to Login */}
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
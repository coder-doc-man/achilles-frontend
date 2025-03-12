import React from 'react';
import Login from './components/Login';
import { CssBaseline } from '@mui/material'; // Import CssBaseline

function App() {
  return (
      <React.Fragment>
          <CssBaseline /> {/* Reset default styles */}
        <Login />
      </React.Fragment>
  );
}

export default App;
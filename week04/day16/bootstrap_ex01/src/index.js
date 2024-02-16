import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './BootstrapEx';
import App from './App';
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import { ThemeProvider} from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = unstable_createMuiStrictModeTheme();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>

  </React.StrictMode>
);

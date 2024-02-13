import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BootEx from './bootEx';
import BootEx2 from './bootEx2';
import BootEx3 from './bootEx3';
import BootEx4 from './bootEx4';
import DragDrop from './DragDrop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bootEx1" element={<BootEx/>} />
        <Route path="/bootEx2" element={<BootEx2/>} />
        <Route path="/bootEx3" element={<BootEx3/>} />
        <Route path="/bootEx4" element={<BootEx4/>} />
        <Route path="/DragDrop" element={<DragDrop/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


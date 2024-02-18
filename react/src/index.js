import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BootEx from './bootEx';
import BootEx2 from './bootEx2';
import BootEx3 from './bootEx3';
import BootEx4 from './bootEx4';
import DragDrop from './DragDrop';
import NoticeBoard from './NoticeBoard/NoticeBoard';
import SignIn from './sign/SignIn';
import SignUp from './sign/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path="/todoList" element={<App />} />
          <Route path="/bootEx1" element={<BootEx/>} />
          <Route path="/bootEx2" element={<BootEx2/>} />
          <Route path="/bootEx3" element={<BootEx3/>} />
          <Route path="/bootEx4" element={<BootEx4/>} />
          <Route path="/DragDrop" element={<DragDrop/>} />
          <Route path="/NoticeBoard" element={<NoticeBoard/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App';

const currentState = {체중:95, 키:180};
const reducer = (state=currentState, action)=>{
  if(action.type === '증가'){
    state.체중++;
  }
  if(action.type === '감소'){
    state.체중--;
  }
  if(action.type == '키증가'){
    state.키++;
  }
  if(action.type == '키감소'){
    state.키--;
  }
  return {...state};
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
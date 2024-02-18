import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import reducer from './reducers/TodoReducers';
import {thunk} from 'redux-thunk'; // redux-thunk 미들웨어를 가져옵니다.

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
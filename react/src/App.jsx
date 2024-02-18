import { useState, useEffect} from 'react';
import './App.css';
import Header from './header';
import ListBody from './ListBody';
import {db} from './firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc  } from "firebase/firestore"; 
import { Provider } from 'react-redux';
import store from './store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodo } from './actions/TodoActions';

// App method
function App() {
  
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList); // 리덕스 스토어의 todoList 상태를 가져옵니다.
  const loading = useSelector(state => state.loading); // 리덕스 스토어의 todoList 상태를 가져옵니다.

  useEffect(() => {
    dispatch(fetchTodo()); // 앱이 마운트될 때 todo 리스트를 가져옵니다.
  }, []);

  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
    <Header/>
    {todoList.map((todo)=>(<ListBody key={todo.no} todo={todo}/>))}
    {loading && <ListBody key="loading" todo={{ key: 'loading', text: 'loading...' }} />}
    </div>  
  );
}

export default App;
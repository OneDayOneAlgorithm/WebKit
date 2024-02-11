import { useState, useEffect } from 'react';
import './App.css';
import ListBody from './ListBody';

// App에서 사용 할 새 컴포넌트 선언
// input에 내용을 입력하고 버튼을 클릭하면
// 입력 된 내용으로 appTitle이 변경 되도록 하라.
function Header(props) {
  const [newTodo, setNewTodo] = useState("");
  
  return (<header className="App-header">
    <h1>Todo List</h1>
    <input onChange={(e)=>{setNewTodo(e.target.value)}} type="text" value={newTodo}></input>
    <button onClick={()=>{

      props.btnHandler({
        id: props.cnt+1,
        text: newTodo,
        done: false
      });
      setNewTodo('');
    }}>add</button>
  </header>);
}

// Header 컴포넌트를 사용하는 컴포넌트
function App() {
  const [todoList,setTodoList] = useState([
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: false
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ]);
  const [cnt,setCnt] = useState(0);
  for(let i=0; i<todoList.length; i++){
    if (cnt < todoList[i].id){
      setCnt(todoList[i].id)
    }
  }
  const btnHandler = function(newTodo) {
    setTodoList([...todoList,newTodo]);
  }
  const todoDelete = function(deletedId) {
    setTodoList(todoList.filter((todo) => todo.id !== deletedId));
  };
  return (
    <div className="App">
      <Header btnHandler={btnHandler} cnt={cnt}></Header>
      {todoList.map((todo)=>(<ListBody key={todo.id} todo={todo} todoDelete={todoDelete}></ListBody>))}    
    </div>
  );
}

export default App;
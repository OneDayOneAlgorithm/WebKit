import { useState } from 'react';
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
      props.btnHandler(newTodo);
      setNewTodo('');
    }}>Click me!</button>
  </header>);
}

// Header 컴포넌트를 사용하는 컴포넌트
function App() {
  const [todoList,setTodoList] = useState([]);

  const btnHandler = function(newTodo,index) {

    setTodoList(prevTodoList => [...prevTodoList,newTodo]);

    console.log('하이')
  }
  const todoDelete = function(todo,key){
    // setTodoList(prevTodoList => prevTodoList.filter((todo,key)=> ))
  }
  return (
    <div className="App">
      <Header btnHandler={btnHandler}></Header>
      {todoList.map((todo,index)=>{
        return(<ListBody todo={todo} key={index} todoDelete={todoDelete}></ListBody>)
      })}
      
    </div>
  );
}

export default App;
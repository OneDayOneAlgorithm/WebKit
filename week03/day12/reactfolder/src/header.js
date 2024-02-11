import React, {useState} from 'react';
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

export default Header;
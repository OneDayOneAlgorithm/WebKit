import './App.css';
import {useState} from 'react';
const TodoList = () =>{
    const [value, setValue] = useState('');
    const [todoList,setTodoList] = useState([
        {no:1, title:'치맥하기', done:false}
    ])
    return(<div className='App-header'>
        <h1>Todo List</h1>
        <main>
            <h2>Welcome</h2>
            <input></input>
            <button>추가</button>
            <hr/>
            <ul>
                <li>
                    <input type='checkbox'></input>
                    <label>aaaa</label>
                    <button>삭제</button>
                </li>
                <li>
                    <input type='checkbox'></input>
                    <label>aaaa</label>
                    <button>삭제</button>
                </li>
            </ul>
        </main>
        <footer>(c) Comstudy school. since 2024</footer>
    </div>)
}
const App = () => {
    return(<div className='App'>
        <TodoList/>
    </div>)
}

export default App;
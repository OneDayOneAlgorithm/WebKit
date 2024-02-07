import { useState } from 'react';
import './App.css';

// App에서 사용 할 새 컴포넌트 선언
// input에 내용을 입력하고 버튼을 클릭하면
// 입력 된 내용으로 appTitle이 변경 되도록 하라.
function Header(props) {
  const [title, setTitle] = useState("");
  return (<header className="App-header">
    <h1>{props.appTitle}</h1>
    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" value={title}></input>
    <button onClick={props.btnHandler}>Click me!</button>
  </header>);
}

// Header 컴포넌트를 사용하는 컴포넌트
function App() {
  const [appTitle, setAppTitle] = useState("Hello world");
  const [cnt, setCnt] = useState(0);
  const btnHandler = function(e) {
    // 버튼이 클릭 되면 cnt가 하나씩 증가
    var newCnt = cnt+1;
    console.log("click:", newCnt);
    setCnt(newCnt);
  }
  return (
    <div className="App">
      <Header appTitle={appTitle} btnHandler={btnHandler}></Header>
    </div>
  );
}

export default App;
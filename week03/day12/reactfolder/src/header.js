import { useState } from "react";

function Header(props) {
    var title = "My Todo List";
    // console.log(props);
    const btnHandler = function(e) {
        console.log("Save Button Clicked!");
        console.log(newTitle);
        setNewTitle("");
    }
    // useState() 훅을 사용하면 결과가 구조분해 할당으로 
    // 상수와 상수의 값을 변경 할 수 있는 setter가 만들어진다.
    // state 변수로 선언해야한다.
    // state 변수의 내용이 변경 되는 순간
    // 화면이 다시 리로드 된다.
    const [newTitle, setNewTitle] = useState("");
    return (<header className="App-header">
        <h1>{title}</h1>
        <p>
            Todo: <input onChange={(e) => {setNewTitle(e.target.value)}} type="text" value={newTitle}/>
            <button onClick={props.btnHandler}>Save</button>
        </p>
    </header>);
}

// 사용하는 페이지에서 import 가능.
export default Header;
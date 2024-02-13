import { useState } from "react";
import "./App.css";

function App () {
    // 리렌더링이 되게 하려면 변수가 아닌 state로 선언.
    const [number, setNumber] = useState(0);
    const [fontStyle, setFontStyle] = useState({color:'black'});
    const [fontColor, setFontColor] = useState("redFont");
    let num = 0;
    const btnHandler = function() {
        num = Math.floor(Math.random()*100);
        if(Math.floor(Math.random()*2)%2 === 0) {
            setFontStyle({color:'red'});
            setFontColor("redFont");
        } else {
            num = -num;
            setFontStyle({color:'blue'});
            setFontColor("blueFont");
        }
        setNumber(num);
    };
    return (<>
        <div className="jumbotron">
            <h1>안녕 세계</h1>
            <button onClick={btnHandler} className="btn btn-danger">클릭하세요!</button>
        </div>
        <div className="container">
            <p>Number: <span className={fontColor}>{number}</span></p>
            <p>Number: <span style={fontStyle}>{number}</span></p>
            <p>Number: <span style={fontColor=='redFont'?{color:'red'}:{color:'blue'}}>{number}</span></p>
        </div>
    </>);
}

const name = "Hello world";

function Other() {
    return <h3>Other Component</h3>
}

export default App;
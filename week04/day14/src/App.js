import {useState} from 'react';

function App(){
    const [fruits,setFruits] = useState(['Banana', 'Orange', 'Apple']);
    const lists = [];
    const [inputVal, setInputVal] = useState("");
    for(let i=0; i<fruits.length;i++){
        lists.push(<li key={i}>{fruits[i]}</li>)
    }
    const BtnHandler = () => {setFruits([...fruits,inputVal]); setInputVal('');}
    const textHandler = (e) => setInputVal(e.target.value)
    return(<>
        <h1>Hello world</h1>
        <div>
            <input onChange={textHandler} type="text" value={inputVal}/>
            <button onClick={BtnHandler}>추가하기</button>
        </div>
        <div>
            <ul>
                {fruits.map(function(value, index){
                    return <li key={index}>{value}</li>
                })}
            </ul>
        </div>
    </>)
}

export default App;
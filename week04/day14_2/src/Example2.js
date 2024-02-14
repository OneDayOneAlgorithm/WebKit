import React, { useState } from 'react';

const MyComponent = () => {
  const [cnt, setCnt] = useState(120);
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const okBtnHandler = e => {
    console.log(value);
  };

  const cntBtnHandler = () => {
    setCnt(prevCnt => prevCnt + 1);
  };

  return (
    <div>
      <header className="App-header">
        <h1>React 생명주기와 Hooks</h1>
      </header>
      <section>
        <h2>Welcome</h2>
        <input value={value} onChange={onChangeHandler}></input>
        <button onClick={okBtnHandler}>확인</button>
         <hr />
        <p>Count : {cnt}</p>
        <button onClick={cntBtnHandler}>확인</button>
      </section>
      <footer>(c)Comstudy21. since 2023.</footer>
    </div>
  );
};

function Example2() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default Example2;
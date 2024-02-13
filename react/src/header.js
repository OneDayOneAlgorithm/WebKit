import React, {useState} from 'react';
// App에서 사용 할 새 컴포넌트 선언
// input에 내용을 입력하고 버튼을 클릭하면
// 입력 된 내용으로 appTitle이 변경 되도록 하라.
function Header(props) {
    const [newTodo, setNewTodo] = useState("");
    
    // Header return
    return (<header>
          <div className="row m-1 p-4">
            <div className="col">
                <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                    <i className="fa fa-check bg-primary text-white rounded p-2"></i>
                    <u>My Todo-s</u>
                </div>
            </div>
        </div>
          <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div className="col">
                    <input onChange={(e)=>{setNewTodo(e.target.value)}} value={newTodo} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .."/>
                </div>
                <div className="col-auto px-0 mx-0 mr-2">
                    <button onClick={()=>{
        props.btnHandler({
          no: props.cnt+1,
          text: newTodo,
          done: false
        });
        setNewTodo('');
      }} type="button" className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
    <div className="p-2 mx-4 border-black-25 border-bottom"></div>
    </header>);
  }

export default Header;
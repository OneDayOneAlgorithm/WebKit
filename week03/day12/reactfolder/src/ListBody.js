function ListBody(props){
    const todoDelete = {

    }
    console.dir(props)
    return (<div>
      <div>
        <input type='checkbox'/>
        <span>{props.todo}</span>
        <button>Edit</button>
        <button onClick = {()=>{
          props.todoDelete(props.todo,props.key)
        }}>Delete</button>
      </div>
      <hr/>
    </div>);
  }

function todoDelete(props){
  return;
}

// export로 등록한 컴포넌트를 사용 할 때는 import 해준다.
export default ListBody;
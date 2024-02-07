function ListBody(){
    return (<div>
      <div>
        <input type='checkbox'/>
        <span>해야 할 일</span>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <hr/>
    </div>);
  }

// export로 등록한 컴포넌트를 사용 할 때는 import 해준다.
export default ListBody;
import { useDispatch, useSelector } from "react-redux";
export const Child03 = () => {
    const dispatch = useDispatch()
    const onClickHandler1 = () =>{
        dispatch({type:'키증가'})
    }
    const onClickHandler2 = () =>{
        dispatch({type:'키감소'})
    }
    return(<div>
        <button onClick={onClickHandler1}>키 증가</button>
        <button onClick={onClickHandler2}>키 감소</button>
    </div>)
}
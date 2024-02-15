import { useDispatch, useSelector } from "react-redux";
export const Child02 = () => {
    const dispatch = useDispatch()
    const onClickHandler1 = ()=>{
        dispatch({type:'증가'})
    }
    const onClickHandler2 = ()=>{
        dispatch({type:'감소'})
    }
    return(
        <div>
            <button onClick={onClickHandler1}>체중 증가</button>
            <button onClick={onClickHandler2}>체중 감소</button>
        </div>
    )
}
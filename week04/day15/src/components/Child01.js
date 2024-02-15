import { useSelector } from "react-redux";

export const Child01 = () => {
    const weight = useSelector((state)=> state.체중)
    const tall = useSelector((state)=>state.키)
    return(
        <div>
            <p>몸무게:{weight}</p>
            <p>키:{tall}</p>
        </div>
    )
}
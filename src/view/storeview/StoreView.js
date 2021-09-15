import {useState, useEffect} from "react";

export const StoreView = () => {
    const [count, setCount] = useState(0);
    useEffect( ()=> {
        alert("Hej distansenklassen!");
        return () => {
            alert("Hej då!");
        };   
    }, [count]);
    return (
    <div>
        <h1>Our product</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => {
            if (count > 0) setCount(count -1)}}>-</button>
    </div>
    )    
    
}
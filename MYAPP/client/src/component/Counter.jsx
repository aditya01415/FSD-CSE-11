import "./Counter.css"
import { useState,useEffect } from "react";
const Counter = () => {
    const [count,setCount]=useState(0);
    const [message,setMessage]=useState("");
    useEffect(()=>{
        setMessage(`Updated Count ${count}`)
    },[count])
    const increment=()=>{
        console.log("Count=",count+1);
        setCount(count+1);
    }
    const decrement=()=>{
        console.log("Count=",count-1);
        setCount(count-1);
    }
  return (
    <div>
      <h1>Counter App</h1>
      <div className='counter'>
        <button className="btn" onClick={decrement}>-</button>
        <div className='id'></div>
        <button className="btn" onClick={increment}>+</button>
      </div>
      <h1>{message}</h1>
    </div>
  )
}

export default Counter

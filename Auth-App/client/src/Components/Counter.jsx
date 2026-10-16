import { useState,useRef,useEffect } from 'react';
import './Counter.css';

function Counter() {
    // let count=0;
    const[count,setCount]=useState(0);
    function increment() {
        // ++count;
        setCount(count+1);
        console.log("Count=",count);
    }
    const decrement=()=>{
        // --count;
        setCount(count-1);
        console.log("Count=",count);
    }
  return (
    <main className="counter-page">
        <section className="counter-card">
            {/* <p className="counter-eyebrow">Interactive utility</p> */}
            <h1>Counter App</h1>
            <div className="counter">
            <button onClick={increment}>+</button>
            <div className="counter-value" aria-live="polite">{count}</div>
            <button onClick={decrement}>-</button>
            </div>
        </section>

    </main>
  )
}

export default Counter

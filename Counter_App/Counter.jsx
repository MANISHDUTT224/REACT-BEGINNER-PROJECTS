import { useState } from 'react'
import './styles.css';
const Counter = () => {
    const [count,setcount]=useState(0);
    const increment=()=>{
        setcount(count+1);
    }
    const decrement=()=>{
        setcount(count-1);
    }
  return (
    <div>
    <div className="container">
        <p className="number">{count}</p>
    </div>
    <section className="btns-container">
        <button className="increment" onClick={increment}>+</button>
        <button className="increment" onClick={decrement}>-</button>
    </section>
    </div>
    
  )
}

export default Counter

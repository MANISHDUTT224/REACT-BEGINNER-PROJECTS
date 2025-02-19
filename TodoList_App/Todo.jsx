import  { useState,useRef } from 'react'
import './Todostyle.css';
const Todo = () => {
    const[Todo,setTodo]=useState([]);
    const[input,setinput]=useState("");
    const handlesubmit=()=>{
       input && setTodo((Todo)=>
        Todo.concat({
            title:input,
            id:Math.floor(Math.random()*10)
        })
);
        setinput("");
        
    }
    const inputelement=useRef(null);
    const handleRemove=(id)=>setTodo((Todo)=>Todo.filter((t)=>t.id!==id));
return (
    <div >
            <input type='text' placeholder='Some todo' value={input} ref={inputelement} onChange={(e) => setinput(e.target.value)} />
           
            <button onClick={handlesubmit}>Submit</button>
            <ul className='todos-list'>
                    {
                            Todo.map(({ title, id }) => (
                                    <li key={id} className='todo'>
                                            <span>{title}</span>
                                            <button onClick={() => handleRemove(id)}>x</button>
                                    </li>
                            ))
                    }
            </ul>
    </div>
)
}

export default Todo

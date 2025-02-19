import { useState, useEffect, createContext } from "react";
import Component1 from './Component1'
import CopyText from "./copyText";
import BackendFetch from "./BackendFetch";
// import ComponentA from "./ComponentA";
// import UpdateUser from './UpdateUser';
// import UserProfile from "./UserProfile";
// import UserProvider from "./UserContext";
import UseReduce from "./UseReduce";
import UseRefexample from './UseRefexample';
import {Timer} from './UseRefexample';
import UseFetch from './UseFetch';
import UseId from "./UseId";
// const Component3=(({randomnum,onClickHandler})=>{
//   return(
//     <>
//     <h1>Your name:{randomnum}</h1>
//     <button onClick={onClickHandler}>Click!</button>
//     </>
//   )
// });

 export const Data=createContext();
 export const Data1=createContext();

const App = () => {
  // const[name,setName]=useState(()=>{
  //   const name=localStorage.getItem('name');
  //   return name?JSON.parse(name):'';
  // })
  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name));
  })
  // const handleChange=((event)=>{
  //   setName(event.target.value);
  // })
  const [count, setCount] = useState(()=>{
    const initialcount=72;

    return initialcount;
  });
  // const Name="Manish"
  // const Age=19;
 const [urldata]=UseFetch("https://jsonplaceholder.typicode.com/todos");
  // const handleClear=(()=>{
  //   setName("");
  // })
  // const[random,setRandom]=useState(()=>{
  //   const randomnum=Math.floor(Math.random()*100);
  //   return randomnum;
  // })
const increment=(()=>setCount((prevcount)=>prevcount+1))
//const getRand=(()=>setRandom(Math.floor(Math.random()*100)))
  return (
    <>
      {/* ✅ Passing props correctly */}
      <Component1 key="component1" count={count} onClickHandler={increment} />
      {/* <Component2 key="component2" count={count}  onClickHandler={()=>setCount(count-1)} />
        <Component3 randomnum={random} onClickHandler={getRand}/> */}

        {/* <input type="text" value={name} onChange={handleChange} placeholder="Enter your name"></input>
        <h2>Your name is : {name}</h2>
        <button onClick={handleClear}>Clear</button> */}
        <TodoList/>
        {/* <ProfileData/>
       <ShoppingList/> */}
       <CopyText/>
       <BackendFetch/>
       {/* <Data.Provider value={Name}>
        <Data1.Provider value={Age}>
        <ComponentA/>
        </Data1.Provider>
        
       </Data.Provider> */}
       {/* <UserProvider>
       <UserProfile/>
     
      
        <UpdateUser></UpdateUser>
      </UserProvider> */}
      <UseReduce></UseReduce>
       <UseRefexample></UseRefexample>
       <Timer></Timer>
       {
        urldata &&
    urldata.map((d)=>{
         
        return <p key={d.id}>Title:{d.title} </p>
      
    })
  }
  <UseId></UseId>
  <UseId></UseId>
       
    </>
  );
}
const TodoList=()=>{
  const [todolist,setodolist]=useState(['do leetcode','do gfg','do codechef']);
  const[task,setask]=useState('');
  const handleChange=(e)=>setask(e.target.value);
const handleSubmit=(e)=>{
  e.preventDefault();
  if(task.trim()){
    setodolist([...todolist,task]);
    setask("");
  }
  }
 
  return (
    <>
  {todolist.map((item)=>(
     <li key={Math.random()}>{item}</li>
  ))}
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter task" onChange={handleChange} value={task}></input>
<br></br>
    <button type="submit">Submit</button>
    </form>
    </>
  )
}
const ProfileData=()=>{
  const[personprofile,setpersonprofile]=useState({
    name:'',
    age:''
  })
  const handleChange=(e)=>{
const{name,value}=e.target;
    setpersonprofile({...personprofile,[name]:value})
  }
  return(
    <>
    <h1>Person Name:{personprofile.name}</h1>
    <h3>Person Age:{personprofile.age}</h3>
    
      <input type="text" value={personprofile.name}   onChange={handleChange} name="name" placeholder="Enter name"></input>
      <input type="number" value={personprofile.age} onChange={handleChange}name="age" placeholder="Enter age"></input>

    </>
  )
}
const ShoppingList=()=>{
  const[shoplist,setshoplist]=useState([{
    name:'Murata Beans',
    price:200
  },
{
  name:'Kodachi Books',
  price:330

}]); 
const[inputvalue,setinputvalue]=useState({
  name:'',
  price:''
})
const handleChange=(e)=>{
  let{name,value}=e.target;
  if(name==="price"){
  value=parseInt(value);
  }
  setinputvalue({...inputvalue,[name]:value});
  
}
const handleSubmit=(e)=>{
  e.preventDefault();
  if(inputvalue){
    setshoplist([...shoplist,inputvalue]);
    setinputvalue({});
  }
}
    return (
      <>
       {shoplist.map((item)=>(
     
     <ul key={Math.random()}>
       <li>Name :{item.name}</li>
       <li>Price:{item.price}</li>
     </ul>
   )
 )}
 <form onSubmit={handleSubmit}>
  <input type="text" placeholder="Enter name :" name="name" value={inputvalue.name} onChange={handleChange}></input>
  <input type="text" placeholder="Enter price: " name="price" value={inputvalue.price} onChange={handleChange} />
  <button type="submit">Add</button>
  </form>
  
      </>
    )
   
  }



export default App;
  
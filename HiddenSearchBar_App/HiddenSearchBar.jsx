import {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import './styles/style.css';
const HiddenSearchBar = () => {
    const[input,showinput]=useState(false);
    const[bgcolor,setbgcolor]=useState('white');
    const handleClick=(e)=>{
      setbgcolor('#1a1a1a');
      if(e.target.className==='container'){
        setbgcolor('#fff');
        showinput(false);
      }
    }
  return (
    <section className='container' style={{backgroundColor:bgcolor}} onClick={handleClick}>
      {input?(
        <input type='text' placeholder='Type something'></input>
      ):(<FaSearch  style={{color:'black', alignContent:'center'}}onClick={()=>showinput(true)}/>)}
      
    </section>
  )
}

export default HiddenSearchBar

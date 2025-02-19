import {useState} from 'react';
import './styles/style.css';
const ToggleBackgroundColor = () => {
    const[backgroundColor,setbackgroundColor]=useState('white');
    const[textcolor,settextcolor]=useState('#1b1b1b');
    const[buttonstyle,setbuttonstyle]=useState('white');
    const handleClick=()=>{
        setbackgroundColor(backgroundColor==='white'?'#1b1b1b':'white');
        settextcolor(textcolor==='1b1b1b'?'#ffa31a':'1b1b1b');
        setbuttonstyle(buttonstyle==='white'?'#1b1b1b':'white')
    }
  return (
    <div style={{backgroundColor,color:textcolor}}>
        <button onClick={handleClick} style={{buttonstyle,color:textcolor,border:`2px solid${textcolor}`}}>
            {backgroundColor==='white'?"Light mode":"Dark mode"}
        </button>
        <section className="content">
            <h1>
                Welcome to A<br></br>
                New World
            </h1>
        </section>
    </div>
  )
}

export default ToggleBackgroundColor

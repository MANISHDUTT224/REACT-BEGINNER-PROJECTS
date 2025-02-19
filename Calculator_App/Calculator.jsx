import {useState} from 'react'
import './styles/style.css';
const Calculator = () => {
    const[inputvalue,setinputvalue]=useState("");
    const Calculate=()=>{
        setinputvalue(eval(inputvalue));
    }
    const clear=()=>{
        setinputvalue("");
    }
    const display=(symbol)=>setinputvalue(inputvalue+symbol);
  return (
    <div>
      <form name='calc' className="calculator">
        <input className='value' type='text' value={inputvalue}></input>
        <span className='clear' onClick={()=>clear()}>C</span>
        <span onClick={()=>display('/')} >/</span >
        <span onClick={()=>display('*')}>*</span >
        <span onClick={()=>display('9')}>9</span >
        <span onClick={()=>display('8')}>8</span >
        <span onClick={()=>display('7')}>7</span>
        <span onClick={()=>display('-')}>-</span>
        <span onClick={()=>display('6')}>6</span>
        <span onClick={()=>display('5')}>5</span>
        <span onClick={()=>display('4')}>4</span>
        <span className="plus">+</span>
        <span onClick={()=>display('3')}>3</span>
        <span onClick={()=>display('2')}>2</span>
        <span onClick={()=>display('1')}>1</span>
        <span onClick={()=>display('0')}>0</span>
        <span onClick={()=>display('00')}>00</span>
        <span onClick={()=>display('.')}>.</span>
        <span className='equal' onClick={()=>Calculate()}>=</span>
        
      </form>
    </div>
  )
}

export default Calculator

import { useState } from "react"
import './styles/style.css';
const Form = () => {
    const [userName,setuserName]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');

    const [erroruserName,seterroruserName]=useState('');
    const [errorEmail,seterrorEmail]=useState('');
    const [errorPassword,seterrorPassword]=useState('');
    const [errorConfirmPassword,seterrorConfirmPassword]=useState('');

    const [userNamecolor,setuserNamecolor]=useState('');
    const [Passwordcolor,setPasswordcolor]=useState('');
    const [Emailcolor,setEmailcolor]=useState('');
    const [ConfirmPasswordcolor,setConfirmPasswordcolor]=useState('');
    let flag=1;
    const validate=(e)=>{
        e.preventDefault();
        
        if(userName.length>=8){
            seterroruserName("");
            setuserNamecolor('green');
            flag++;
        }
        else{
            seterroruserName("Name should be atleast 8 characters long");
            setuserNamecolor('red');
            
        }
        if(Email.includes("@gmail.com")){
            seterrorEmail("");
            setEmailcolor('green');
          flag++;
        }
        else{
            seterrorEmail("Email should include @gmail.com");
            setEmailcolor('red');
          

        }
        if(Password.length>8){
            seterrorPassword("");
            setPasswordcolor('green');
           flag++;
        }
        else{
            seterrorPassword('Password should have 8 characters');
            setPasswordcolor('red');
            
        }
        if(ConfirmPassword!=='' && ConfirmPassword===Password){
            seterrorConfirmPassword("");
            setConfirmPasswordcolor('green');
            flag++;
        }
        else{
            seterrorConfirmPassword('Passwords dont match');
            setConfirmPasswordcolor('red');
            flag=0;
        }
        console.log(flag);

    }
  return (
    <div className="card">

      <div className="card-image"></div>
      <form >
        <input type="text" placeholder="Name" value={userName} style={{borderColor:userNamecolor}} onChange={(e)=>setuserName(e.target.value)} />
        <p className="error">{erroruserName}</p>

        <input type="email" placeholder="Email" value={Email} style={{borderColor:Emailcolor}} onChange={(e)=>setEmail(e.target.value)} />
        <p className="error">{errorEmail}</p>

        <input type="password" placeholder="Passoword" value={Password} style={{borderColor:Passwordcolor}} onChange={(e)=>setPassword(e.target.value)} />
        <p className="error">{errorPassword}</p>

        <input type="password" placeholder="Confirm Password" value={ConfirmPassword} style={{borderColor:ConfirmPasswordcolor}} onChange={(e)=>setConfirmPassword(e.target.value)} />
        <p className="error">{errorConfirmPassword}</p>

        <button className="btn-submit" onClick={validate}>Submit</button>
        {flag==5 && <p style={{color:'green'}}>Successful</p>}
      </form>

    </div>
  )
}

export default Form

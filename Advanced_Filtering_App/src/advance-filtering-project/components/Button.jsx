

function Button({handleClick,title,value}) {
  return (
   
    <button className="btn" value={value} onClick={handleClick} >{title}</button>
   
  )
}

export default Button

import './Color.css';
import Input from '../../components/Input';
function Color({handleChange}) {
  return (
    <div>
    
      <h2 className='sidebar-title color-tile'>Color</h2>
      <div className='sidebar-items'>
      <label  className="sidebar-label-container">
    <input type="radio" onChange={handleChange} name="test3" value=""  />
    <span className="checkmark all"></span>All
    </label>
        <Input handleChange={handleChange} color="black" name="test3" value="black" title="Black"/>
        <Input handleChange={handleChange} color="blue" name="test3" value="blue" title="Blue"/>
        <Input handleChange={handleChange} color="red" name="test3" value="red" title="Red"/>
        <Input handleChange={handleChange} color="green" name="test3" value="green" title="Green"/>
        <label  className="sidebar-label-container">
    <input type="radio" onChange={handleChange} name="test3" value="white"  />
    <span className="checkmark " style={{background:'white',border:'2px solid black'}}></span>White
    </label>
      </div>
  
    </div>
  )
}

export default Color

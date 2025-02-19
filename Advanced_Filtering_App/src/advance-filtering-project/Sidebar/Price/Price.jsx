import './Price.css';
import Input from '../../components/Input';
function Price({handleChange}) {
  return (
  
      <div className="ml"> 
       
      <h2 className='sidebar-title price-tile'>Price</h2>
      <div className='sidebar-items'>
      <label  className="sidebar-label-container">
    <input type="radio" onChange={handleChange} name="test2" value=""  />
    <span className="checkmark"></span>All
    </label>
        <Input handleChange={handleChange} value={50} name="test2" title="$0-$50"  />
        <Input handleChange={handleChange} value={100} name="test2" title="$50-$100"/>
        <Input handleChange={handleChange} value={150} name="test2" title="$150-$200"/>
        <Input handleChange={handleChange}  value={200} name="test2" title="Over$200"/>
        
       
      </div>
    </div>
   
  )
}

export default Price

import Button from '../components/Button'
import './Recommended.css'

function Recommended({handleClick}) {
  return (
    <>
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button  handleClick={handleClick} title="All Buttons" value=""/>
        <Button handleClick={handleClick} title="Nike" value="Nike"/>
        <Button handleClick={handleClick} title="Adidas" value="Adidas"/>
        <Button  handleClick={handleClick} title="Puma" value="Puma"/>
        <Button  handleClick={handleClick} title="Vans" value="Vans"/>
      </div>
    </div>
    </>
  )
}

export default Recommended

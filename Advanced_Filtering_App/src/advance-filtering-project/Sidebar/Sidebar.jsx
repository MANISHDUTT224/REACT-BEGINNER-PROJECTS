import Category from './Category/Category';
import Price from './Price/Price';
import Color from './Color/Color';
import './Sidebar.css';
function Sidebar({handleChange}) {
  return (
    <>
    <section className="side-bar">
        <div className="logo-container">
        <h1>&#128722;</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
    </section>
    </>
  )
}

export default Sidebar

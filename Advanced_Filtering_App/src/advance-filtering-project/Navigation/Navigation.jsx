import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import {FiHeart} from "react-icons/fi";
import './Navigation.css';
function Navigation({handleInputChange}) {
  return (
    <nav>
    <div className="nav-container">
        <input type="text" placeholder="Enter to search" onChange={handleInputChange} className="search-input" />
    </div>
    <div className="profile-container">
        <a href="#" ><FiHeart className="nav-icons"/></a>
        <a href="#" ><AiOutlineShoppingCart className="nav-icons"/></a>
        <a href="#"><AiOutlineUserAdd  className="nav-icons"/></a>
    </div>
    </nav>
  )
}

export default Navigation

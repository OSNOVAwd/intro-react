import { CiSearch, CiLogin } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import {Link} from 'react-router-dom';
import './navbar.css' 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact Us</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/faq'}>Faqs</Link>
        <Link to={'/about'}>About</Link>
      </ul>
      <form action="">
        <input type="text" placeholder="Search.."/>
        <div className="search-icon"><CiSearch/></div>
      </form>
      <ul className="login">
        <li><LuMessageSquare id="message"/></li>
        <Link to={'/login'}><CiLogin id="sign-in"/></Link>
        <Link to={'/sign-up'} id="sign-up">Sign Up</Link>
      </ul>
    </div>
  )
}

export default Navbar
import { CiSearch, CiLogin } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";

import './navbar.css' 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>Products</li>
        <li>Faqs</li>
        <li>About</li>
      </ul>
      <form action="">
        <input type="text" placeholder="Search.."/>
        <div className="search-icon"><CiSearch/></div>
      </form>
      <ul className="login">
        <li><LuMessageSquare id="message"/> </li>
        <li><CiLogin id="sign-in"/></li>
        <li id="sign-up">Sign Up</li>
      </ul>
    </div>
  )
}

export default Navbar
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ setshowlogin}) => {
  const [menu, setMenu] = useState("");
  const{gettotalcartamount}=useContext(StoreContext);
  return (
    <div className="navbar">
      <div className="navbar-left">
        
      <Link to='/'> <img className="logo" src={assets.logo} alt="" /></Link> 
      </div>
      <div className="navbar-center">
        <ul>
          <li>
            
            <Link to='/'
              onClick={() => {
                setMenu("home");
              }}
             className={menu === "home" ? "active" : ""} > home
           </Link>
          </li>
          <li>
            {" "}
            <a
              href="#"
              onClick={() => {
                setMenu("menu");
              }}
              className={menu === "menu" ? "active" : ""}
            >
              menu
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#"
              onClick={() => {
                setMenu("mobile-app");
              }}
              className={menu === "mobile-app" ? "active" : ""}
            >
              mobile-app
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setMenu("contact us");
              }}
              className={menu === "contact us" ? "active" : ""}
            >
              contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="search-icon">
          <img src={assets.search_icon} alt="" />
        </div>
        <div className="basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          {gettotalcartamount()>0 
           ? ( <div className="dot"></div> )
          : (console.log("empty"))}
        </div>
        <div>
          <button onClick={() => {setshowlogin(true); }}>sign in </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

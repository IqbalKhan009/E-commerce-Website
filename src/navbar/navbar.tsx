import React, { useState } from "react";
import newlogo from "../assets/newlogo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <div className="logo">
        <p>Shop</p>
      </div>
      <ul className="navitems">
        <li
          onClick={() => {
            setmenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("aboutus");
          }}
        >
          about us
          {menu === "aboutus" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("categories");
          }}
        >
          catgories
          {menu === "categories" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("special");
          }}
        >
          Special
          {menu === "special" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="logincart">
        <button>Login</button>
        <img src={newlogo} alt="" />
        <div className="cart-counter">0</div>
      </div>
    </div>
  );
};
export default Navbar;

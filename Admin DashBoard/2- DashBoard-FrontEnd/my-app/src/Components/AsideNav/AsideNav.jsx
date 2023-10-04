// import React from 'react'
import "./AsideNav.css";
import { Link } from "react-router-dom";

function AsideNav() {
  return (
    <div className="asideBarCont">
      <div className="eachPoint">
        <i className="fa-solid fa-clipboard" style={{ color: "#60626e" }}></i>
        <Link to="/">
          <div>DashBoard</div>
        </Link>
      </div>
      <div className="eachPoint">
        <i className="fa-regular fa-user" style={{ color: "#60626e" }}></i>
        <Link to="/users">
          <div>Users</div>
        </Link>
      </div>
      <div className="eachPoint">
        <i className="fa-solid fa-shop" style={{ color: "#60626e" }}></i>
        <Link to="/allStores">
          <div>Stores</div>
        </Link>
      </div>
      <div className="eachPoint">
        <i
          className="fa-solid fa-bag-shopping"
          style={{ color: "#60626e" }}
        ></i>
        <Link to="/allProducts">
          <div>Products</div>
        </Link>
      </div>

      <div className="eachPoint">
        <i
          className="fa-solid fa-right-from-bracket"
          style={{ color: "#60626e" }}
        ></i>
        <a href="#/">
          <div>LogOut</div>
        </a>
      </div>
    </div>
  );
}

export default AsideNav;

{
  /* <aside className="aside">
      <ul>
        <li>
        <div className="eachPoint">
        <i className="fa-solid fa-clipboard" style={{color: "#60626e"}}></i>
        <a href="#/">
          <div>DashBoard</div>
        </a>
      </div>
        </li>
        <li>
        <div className="eachPoint">
        <i className="fa-solid fa-clipboard" style={{color: "#60626e"}}></i>
        <a href="#/">
          <div>Users</div>
        </a>
      </div>
        </li>
        <li>
        <div className="eachPoint">
        <i className="fa-solid fa-clipboard" style={{color: "#60626e"}}></i>
        <a href="#/">
          <div>Stores</div>
        </a>
      </div>
        </li>
        <li>
        <div className="eachPoint">
        <i className="fa-solid fa-clipboard" style={{color: "#60626e"}}></i>
        <a href="#/">
          <div>DashBoard</div>
        </a>
      </div>
        </li>
        <li>
        <div className="eachPoint">
        <i className="fa-solid fa-clipboard" style={{color: "#60626e"}}></i>
        <a href="#/">
          <div>DashBoard</div>
        </a>
      </div>
        </li>
        <li>
        <div className="eachPoint">
        <i className="fa-solid fa-clipboard" style={{color: "#60626e"}}></i>
        <a href="#/">
          <div>DashBoard</div>
        </a>
      </div>
        </li>
      </ul>
    </aside> */
}

{
  /* <div className="asideBarCont">
      <div className="eachPoint">
        <i className="fa-solid fa-clipboard" style={{color: "#60626e"}}></i>
        <a href="#/">
          <div>DashBoard</div>
        </a>
      </div>
      <div className="eachPoint">
        <i className="fa-regular fa-user" style={{color: "#60626e"}}></i>
        <a href="#/">
          <div>Users</div>
        </a>
      </div>
      <div className="eachPoint">
        <i className="fa-solid fa-shop" style={{color: "#60626e"}}></i>
        <div>Stores</div>
      </div>
      <div className="eachPoint">
        <i className="fa-solid fa-bag-shopping" style={{color: "#60626e"}}></i>
        <a>
          <div>Products</div>
        </a>
      </div>

      <div className="eachPoint">
        <i className="fa-solid fa-right-from-bracket" style={{color: "#60626e"}}></i>
        <a href="#/">
          <div>LogOut</div>
        </a>
      </div>
    </div> */
}

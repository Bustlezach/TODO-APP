import React from "react";
import "./styles/navBar.css"
import { NavLink } from "react-router-dom";


function NavBar() {
  return(
    <nav>
      <div className="logo">Todo's</div>
      <input type="checkbox" id="toggle-menu" />
      <label htmlFor="toggle-menu" id="open">&#9776;</label>
      {/* <label htmlFor="toggle-menu" id="close">&#x2716;</label> */}
      <div className="nav-link">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/AddTodo">Add Todo</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
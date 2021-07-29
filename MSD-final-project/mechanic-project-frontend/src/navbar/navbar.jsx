import Item from "antd/lib/list/Item";
import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import {Button} from './button';
import './navbar.css'

class NavBar extends Component {
   state = {
       clicked: false
   }
   
   handleClick = ()=>{
       this.setState({clicked: !this.state.clicked})
   }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Efi Mechanic<i class="fab fa-react"></i></h1>
        <div className="menu-icons" onClick={this.handleClick}>
             <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key = {index}>
                <NavLink exact to={item.to} className={item.cName}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;

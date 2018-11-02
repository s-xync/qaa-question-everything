import React, { Component } from 'react';
import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand tag={Link} to="/">QAA</NavbarBrand>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <NavItem>
              <NavLink tag={Link} to="/signup">Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/login">Login</NavLink>
            </NavItem>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

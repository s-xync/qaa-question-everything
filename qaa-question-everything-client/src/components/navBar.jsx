import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { toggleIsOpen } from '../actions';

class NavBar extends Component {
  toggle = () => {
    this.props.toggleIsOpen();
  }

  render(){
    return(
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.props.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/account">Login / Signup</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  isOpen : propTypes.bool.isRequired,
  toggleIsOpen : propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOpen : state.navBar.isOpen
});

export default connect(mapStateToProps,{ toggleIsOpen })(NavBar);

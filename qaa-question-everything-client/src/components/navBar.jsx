import React, { Component, Fragment } from 'react';
import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class NavBar extends Component {

  renderLoggedInNavItems = () => {
    if(this.props.validSession){
      return(
        <Fragment>
          <NavItem>
            <NavLink tag={Link} to="/profile">{this.props.firstName + " " + this.props.lastName}</NavLink>
          </NavItem>
        </Fragment>
      );
    }else{
      return(
        <Fragment>
          <NavItem>
            <NavLink tag={Link} to="/signup">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/login">Login</NavLink>
          </NavItem>
        </Fragment>
      );
    }
  }

  render(){
    return(
      <Fragment>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <NavbarBrand tag={Link} to="/">QAA</NavbarBrand>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              { this.renderLoggedInNavItems() }
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

NavBar.propTypes = {
  validSession : propTypes.bool.isRequired,
  firstName : propTypes.string,
  lastName : propTypes.string
};

const mapStateToProps = ({ user }) => ({
  validSession : user.validSession,
  firstName : user.firstName,
  lastName : user.lastName
});

export default connect(mapStateToProps, {  })(NavBar);

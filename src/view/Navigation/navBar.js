import React, { Component, Fragment } from "react";
import logo from "../../images/testlogo4.svg";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import firebase from "firebase/app";

class Navbar extends Component {
  render() {
    var user = firebase.auth().currentUser;
    var photoUrl;

    if (user != null) {
      photoUrl = user.photoURL;
    }

    const { isAuthenticated } = this.props;
    return (
      <div className="menu-body">
        <div className="menu-top">
          <div className="menu">
            {isAuthenticated ? (
              <Fragment>
                <NavLink to="/kurs">
                  <img className="menu-logo" src={logo} alt="AMatte Logo" />
                </NavLink>
                <NavLink to="/min-side" className="signedIn-btn">
                  <img className="menu-avatar" src={photoUrl} alt="" />
                  MIN SIDE
                </NavLink>
                <NavLink to="/ressurser" className="basic-btn">
                  RESSURSER
                </NavLink>
                <NavLink to="/priser" className="basic-btn1">
                  PRISER
                </NavLink>
                <NavLink to="/om-oss" className="basic-btn2">
                  OM OSS
                </NavLink>
              </Fragment>
            ) : (
              <Fragment>
                <NavLink to="/">
                  <img className="menu-logo" src={logo} alt="AMatte logo"></img>
                </NavLink>
                <NavLink to="/login" className="signIn-btn">
                  Logg inn
                </NavLink>
                <NavLink to="/om-oss" className="basic-btn">
                  OM OSS
                </NavLink>
                <NavLink to="/min-side" className="basic-btn1">
                  ALLE KURSER
                </NavLink>
                <NavLink to="/priser" className="basic-btn3">
                  PRISER
                </NavLink>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(Navbar);

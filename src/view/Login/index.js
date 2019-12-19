import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../images/logomain.svg";
import LoginForm from "./loginForm";
import { NavLink } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="main-login-container">
        <div className="login-header-top">
          <NavLink to="/">
            <Logo src={logo} />
          </NavLink>
        </div>
        <LoginForm />
      </div>
    );
  }
}

export default Login;

//Logo
const Logo = styled.img`
  width: 15rem;
  height: 13rem;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;

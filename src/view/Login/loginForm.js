import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { google } from "react-icons-kit/fa/google";
import "../../css/LoginForm.css";

// Logins
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { facebookLogin, googleLogin } from "../../modules/auth";
import { googleProvider, fbProvider } from "../../components/Firebase/firebase";

// Firebase auth

class LoginForm extends Component {
  state = { email: "", password: "" };

  handleFb = () => {
    const { dispatch } = this.props;
    dispatch(facebookLogin(fbProvider));
  };
  handleGoogle = () => {
    const { dispatch } = this.props;
    dispatch(googleLogin(googleProvider));
  };

  // Login form switcher
  switchOverlay() {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  }
  switchOverlayBack() {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  }

  //Legit login
  // Signup

  render() {
    const { loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/kurs" />;
    }
    return (
      <Body>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form noValidate onSubmit={this.handleFb}>
              <h1 style={{ color: "#283464" }}>Opprett bruker</h1>
              <div className="social-container">
                <Icon
                  className="fbIcon"
                  style={{ cursor: "pointer", padding: "0 25px 0 0" }}
                  icon={facebookSquare}
                  size={55}
                  id="btnFacebook"
                />
                <Icon
                  className="googleIcon"
                  style={{ cursor: "pointer" }}
                  icon={google}
                  size={55}
                  id="btnGoogle"
                ></Icon>
              </div>
              <span className="span-info">
                Eller bruk fortsett med Facebook
              </span>
              <button>Fortsett med Facebook</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form noValidate onSubmit={this.handleFb}>
              <h1 style={{ color: "#283464" }}>Velkommen student! </h1>
              <div className="social-container">
                {" "}
                <Icon
                  className="fbIcon"
                  style={{ cursor: "pointer", padding: "0 25px 0 0" }}
                  icon={facebookSquare}
                  size={65}
                  onClick={this.handleFb}
                />
                <Icon
                  className="googleIcon"
                  style={{ cursor: "pointer" }}
                  icon={google}
                  size={65}
                  id="btnGoogle"
                  onClick={this.handleGoogle}
                ></Icon>
              </div>

              {loginError && (
                <p className="errorText" style={{ color: "red" }}>
                  Feil passord eller brukernavn
                </p>
              )}
              <a href="/login">
                Velg innloggings metode, eller fortsett med Facebook
              </a>
              <button type="button" onClick={this.handleFb}>
                Fortsett med Facebook
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Velkommen tilbake!</h1>
                <p className="white">
                  For å fortsette å forbedre mattekarakterene logg på med oss
                </p>
                <button
                  onClick={this.switchOverlayBack}
                  className="ghost"
                  id="signIn"
                >
                  Logg på
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hallo, student!</h1>
                <p className="white">
                  Bli med på et matte eventyr med oss og få bedre karakterer
                </p>
                <button
                  onClick={this.switchOverlay}
                  className="ghost"
                  id="signUp"
                >
                  Registrer deg
                </button>
              </div>
            </div>
          </div>
        </div>
      </Body>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(LoginForm);

const Body = styled.div`
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
  height: 110vh;
  margin: -20px 0 50px;


  h1 {
    font-weight: bold;
  }



  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
    
  }


  span {
    font-size: 12px;
  }

  .span-info {
    padding: 10px 0;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
  button {
    border-radius: 20px;
    border: 1px solid #4C68FF;
    background: #4C68FF;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 45px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    outline: none;

  .errorText {
    color: "red";
  }


`;

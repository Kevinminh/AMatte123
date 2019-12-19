import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { logoutUser } from "../../modules/auth";
import firebase from "firebase/app";

import Newsletter from "./newsletter/index";

// skeleton

class myProfile extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    const { isLoggingOut, logoutError } = this.props;
    var user = firebase.auth().currentUser;
    var email, photoUrl;

    if (user != null) {
      email = user.email;
      photoUrl = user.photoURL;
    }
    return (
      <Body>
        <div className="container-main">
          <div className="container-profile">
            <h3>Min profil</h3>
            <div>
              Denne kontoen tilhører:
              <p style={{ fontWeight: "900" }}>{email}</p>
              <img className="avatar" src={photoUrl} alt="profile avatar" />
            </div>
          </div>
          <div className="container-newsletter">
            <Newsletter />
          </div>
          <div className="container-course-access">
            <div className="course-access-content">
              <h3>Tilgang</h3>
            </div>
          </div>
          <div className="container-buy-history">
            <div className="buy-history-content">
              <h3>Kjøpshistorie</h3>
              <button className="logOut-btn" onClick={this.handleLogout}>
                Logout
              </button>
              {isLoggingOut && <p>Logging Out....</p>}
              {logoutError && <p>Error logging out</p>}
            </div>
          </div>
        </div>
      </Body>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(myProfile);

const Body = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f8f9fa;

  .container-profile {
    padding: 3.5rem 2rem;
    grid-area: main;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    width: 100%;
  }

  .container-newsletter {
    grid-area: sidebar;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    padding: 3.5rem 2rem;
    border-radius: 5px;
  }

  .container-course-access {
    grid-area: access;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    background: #fff;
    padding: 3.5rem 2rem;
    margin: 50px 0px 50px 0;
    border-radius: 5px;
  }

  .container-buy-history {
    grid-area: history;
    padding: 3.5rem 2rem;
    background: #fff;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  h3 {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
  }

  p {
    padding-bottom: 2px;
  }

  .container-main {
    display: grid;
    grid-template-columns: 500px 500px 50px 350px;
    grid-template-rows: auto;
    padding: 50px 0px 100px 0px;
    margin: 0px 20px 0px 20px;
    justify-content: center;
    grid-template-areas:
      "main main . sidebar"
      "access access access access"
      "history history history history";
  }

  .logOut-btn {
    border-radius: 20px;
    border: 1px solid #4c68ff;
    background: #4c68ff;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 45px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    outline: none;
  }
`;

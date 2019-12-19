import React, { Component } from "react";
import firebase from "firebase/app";

class index extends Component {
  render() {
    // User email

    var user = firebase.auth().currentUser;
    var email;

    if (user != null) {
      email = user.email;
    }

    // Form

    /*
    let cta = document.getElementById("cta");

   

    let error = document.getElementById("error");
    let success = document.getElementById("success");
    let signup = document.getElementById("signup"); 
    */

    return (
      <div>
        <form method="POST" action="/subscribe">
          <h3>Nyhetsbrev</h3>
          <p>Epost</p>
          <input
            style={{
              marginBottom: "15px",
              borderRadius: "5px",
              padding: "5px"
            }}
            className="AV-item-search"
            placeholder={email}
            id="email"
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          ></input>
          <p id="error" className="error"></p>
          <button className="tabs-btn" type="submit" id="cta" value="Notify me">
            Send
          </button>
        </form>

        <div id="success">
          <h2>Confirm your email!</h2>
          <p>
            The last step is to confirm your email! Give it couple of minutes!
          </p>
        </div>
      </div>
    );
  }
}

export default index;

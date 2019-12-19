import React, { Component } from "react";
import UserProfile from "./userProfile";
import LoggedInFooter from "../Navigation/loggedInFooter";

class minSide extends Component {
  render() {
    return (
      <div>
        <UserProfile />

        <LoggedInFooter> </LoggedInFooter>
      </div>
    );
  }
}

export default minSide;

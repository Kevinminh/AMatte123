import React, { Component } from "react";
import OurResources from "./resources";
import LoggedInFooter from "../Navigation/loggedInFooter";

export default class Ressurser extends Component {
  render() {
    return (
      <div>
        <OurResources></OurResources>
        <LoggedInFooter></LoggedInFooter>
      </div>
    );
  }
}

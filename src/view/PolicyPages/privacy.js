import React, { Component } from "react";
import Index from "./privacyContent";
import Footer from "../Navigation/loggedInFooter";

class Privacy extends Component {
  render() {
    return (
      <div>
        <Index />
        <Footer />
      </div>
    );
  }
}

export default Privacy;

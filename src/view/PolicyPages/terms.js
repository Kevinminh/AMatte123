import React, { Component } from "react";
import Index from "./termsContent";
import Footer from "../Navigation/loggedInFooter";

class Terms extends Component {
  render() {
    return (
      <div>
        <Index />
        <Footer />
      </div>
    );
  }
}

export default Terms;

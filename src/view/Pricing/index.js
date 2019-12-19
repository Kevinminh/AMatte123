import React, { Component } from "react";
import Pricing from "./priceTable";
import Footer from "../Navigation/footer";

class PriceTable extends Component {
  render() {
    return (
      <div>
        <Pricing></Pricing>
        <Footer></Footer>
      </div>
    );
  }
}

export default PriceTable;

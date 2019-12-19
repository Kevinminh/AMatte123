import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Navigation/footer";

class Index extends Component {
  render() {
    return (
      <div>
        <title>404</title>
        <div className="grid grid-column-box top-padding">
          <div className="center" style={{ margin: "0 30%", padding: "2% 0" }}>
            <div className="">
              <p style={{ fontWeight: "bold" }}>Oisann!</p>
            </div>
            <h2 className="bold" style={{ fontSize: "60px" }}>
              Hei medstudent!
            </h2>
            <span>
              <h3 style={{ paddingBottom: "7.5%" }}>
                Du har nå havnet på bunnen. Siden du leter etter er enten
                flyttet eller eksisterer ikke lenger.
              </h3>
            </span>
            <Link to="/">
              <button className="tabs-btn">Tilbake til toppen</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Index;

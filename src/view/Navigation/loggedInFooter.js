import React, { Component } from "react";
import Icon from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { Link } from "react-router-dom";

class loggedInFooter extends Component {
  render() {
    return (
      <footer className="footer-area">
        <div className="footer-container">
          <div className="copyrights text-left">
            <p className="para">
              Copyright @2019 |{" "}
              <Link to="/brukervilkar">
                <span className="AMatte">Brukervilkår </span>|
              </Link>
              <Link to="/personvern">
                <span className="AMatte"> Personvern </span>|
              </Link>
              <Link to="/cookies">
                <span className="AMatte"> Cookies </span>|
              </Link>
              <Link to="/kurs">
                <span className="AMatte"> AMatte</span>
              </Link>
            </p>
          </div>
          <div className="social text-right">
            <a href="/#">
              <Icon icon={facebook} size={40} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default loggedInFooter;

import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../images/testlogo2.svg";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { instagram } from "react-icons-kit/fa/instagram";
import { ic_chat_bubble_outline } from "react-icons-kit/md/ic_chat_bubble_outline";
import footerBg from "../../images/footer-bg.svg";
import { Link } from "react-router-dom";

class Footer1 extends Component {
  render() {
    return (
      <Footer className="footer-area">
        <div className="footer-container-main">
          <div className="">
            <div className="site-logo text-center py-4">
              <a href="/#">
                <img src={Logo} className="logo" alt="logo" />
              </a>
            </div>
            <div className="social text-center">
              <h5 className="text-uppercase">Følg oss</h5>
              <a href="/#">
                <Icon icon={facebook} size={40}></Icon>
              </a>
              <a href="/#">
                <Icon icon={instagram} size={40}></Icon>
              </a>
              <a href="/#">
                <Icon icon={ic_chat_bubble_outline} size={40}></Icon>
              </a>
            </div>
            <div className="copyrights text-center">
              <p className="para">
                Copyright @2019 |
                <Link to="/brukervilkar">
                  <span className="AMatte">Brukervilkår | </span>
                </Link>
                <Link to="/personvern">
                  <span className="AMatte">Personvern | </span>
                </Link>
                <Link to="/cookies">
                  <span className="AMatte">Cookies | </span>
                </Link>
                <Link to="/kurs">
                  <span className="AMatte"> AMatte</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Footer>
    );
  }
}

export default Footer1;

const Footer = styled.div`
  padding: 5rem 0;
  background-image: url(${footerBg});
  background-size: cover;

  .logo {
    height: 125px;
    width: 125px;
    margin-top: -20px;
  }

  h5 {
    font-weight: 500;
    font-size: 23px;
    color: #fff;
    margin-top: -50px;
    padding-bottom: 5px;
  }

  .social a {
    color: #fff;
    font-size: 22px;
    padding: 2rem;
  }

  .para {
    padding-top: 85px;
    margin-bottom: -45px;
    color: #fff;
  }

  .AMatte {
    color: #fff;
  }
`;

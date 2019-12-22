import React, { Component } from "react";
import styled from "styled-components";
import Img from "../../images/laptop_no_screen1.svg";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";

class Landingpage extends Component {
  render() {
    return (
      <Body>
        <div className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <h1>Matte - smartere og raskere</h1>
              <p>
                En felles plattform i matematikk tilgjengelig for alle trinn og
                elever. Optimal videolæring, effektive quizoppgaver tilknyttet
                pensum og eksamen, alt i ett.
              </p>
              <p>Dette har vi alle ventet lenge på!</p>
              <div className="main-offer-btn">
                <Link className="main-link" to="/priser">
                  <div className="hero-btn">
                    PRØV GRATIS
                    <Icon
                      className="Icon"
                      icon={ic_keyboard_arrow_right}
                      size={25}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="video-container" alt="content-video">
              <div className="noLaptop">
                <img src={Img} alt="content-img" />

                <div
                  className="wistia_responsive_padding"
                  style={{ padding: "56.56% 0 0 0" }}
                >
                  <div className="wistia_homePage">
                    <iframe
                      src="https://fast.wistia.net/embed/iframe/udkc5e0joi?seo=false&videoFoam=true"
                      title="video1.mp4"
                      allowtransparency="true"
                      frameBorder="0"
                      scrolling="no"
                      className="wistia_embed"
                      name="wistia_embed"
                      width="100%"
                      height="100%"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Body>
    );
  }
}

export default Landingpage;

const Body = styled.div`



  .hero-content {
    width: 100%;
  }
  
  .hero-content p {
    line-height: 1.65;
    padding: 0 50px 0 0px;
    margin-left: 5px;
  }

  .main-link {
    text-decoration: none;
    color: #fff;
  }

  }
  h1 {
    font-size: 50px;
    font-weight: bold;
    color: var(--main-dark-blue);
  }

  .noLaptop {
    position: absolute;
    width: 900px;
    padding-top: 75px;
    
  }

  p {
    font-weight: 400;
    color: var(--main-dark-blue);
    font-size: 16px;
  }

  .Icon svg {
    color: #ff;

    vertical-align: bottom;
    margin-left: 1.5rem;
  }
`;

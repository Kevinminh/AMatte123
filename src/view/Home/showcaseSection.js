import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../images/fb-logo.png";

class Showcase extends Component {
  render() {
    return (
      <Body className="showcase-section">
        <div className="showcase-container">
          <div className="showcase-inner">
            <div className="show-case-box">
              <div className="icon">
                <img src={Logo} alt="" />
              </div>
              <h1>Ola Nordmann</h1>
              <p>
                Helt utrolig hvordan noen få uker med AMatte er akk som flere
                måneder med matte på skolen... Bra jobbet dere!
              </p>
            </div>
          </div>
        </div>
      </Body>
    );
  }
}

export default Showcase;

const Body = styled.div`
    color: #000;
    padding-bottom: 100px;
    padding-top: 45px;
    z-index: 3;

    .showcase-section {
        width: 100%;
        padding: 100px 0px;
    }

    .showcase-inner {
        display: absolute;
        padding: 40px 0
        display: grid;
        justify-content: center;
        align-content: center;
        text-align: center;
        grid-template-columns: 1fr;
        margin: 0 12%;
        box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.1);
        border-radius: 10px;

    }

    .show-case-box {
        text-align: center;
    }

    .icon {
        margin-bottom: 10px;

    }

    .icon img {
        width: 40px;
        height: auto;


    }

    .show-case-box h1 {
        font-size: 16px;
        margin-bottom: 5px;

    }

    .show-case-box p {
        color: #9e9e9e;

    }
`;

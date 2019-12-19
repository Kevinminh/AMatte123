import React, { Component } from "react";
import "../../../../css/Quiz.css";
import styled from "styled-components";

import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div className="full-width">
        <div className="full-width">
          <div className="videoEmbed ">
            <div className="videoEmbedWrapper">
              <iframe
                src={this.props.vid}
                title="video1.mp4"
                allowtransparency="true"
                frameBorder="0"
                scrolling="no"
                className="wistia_embed"
                name="wistia_embed"
                autoPlay="allow"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
              ></iframe>
            </div>

            <InfoSection>
              <div className="crs-sec">
                <div className="info-section">
                  <h2 className="bold">{this.props.title}</h2>
                  <p>
                    <span style={{ color: "#a9a9a9" }}>Videolengde: </span>
                    <span className="bold blue">{this.props.length} </span>
                    <span style={{ color: "#a9a9a9" }}> | </span>
                    <span style={{ color: "#a9a9a9" }}>Vanskelighetsgrad:</span>
                    <span className="bold blue"> {this.props.difficulty}</span>
                  </p>

                  <Link
                    to={this.props.prevBtn}
                    style={{ textDecoration: "none" }}
                  >
                    <button className={this.props.prevBtnStyle}>Tilbake</button>
                  </Link>
                </div>
                <div className="input-section">
                  <p style={{ color: "#a9a9a9" }}>
                    Neste:
                    <span className="bold blue"> {this.props.nextItem}</span>
                  </p>

                  <Link
                    style={{ color: "#fff", textDecoration: "none" }}
                    to={this.props.nextBtn}
                  >
                    <button className="quiz-btn">Neste</button>
                  </Link>
                </div>
              </div>
            </InfoSection>
          </div>
        </div>
        <script async></script>
      </div>
    );
  }
}

export default Index;

const InfoSection = styled.div`
  padding: 0;
  width: 100%;
  border-sizing: border-box;

  .crs-sec {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 22.5px 0px 22.5px;
    position: relative;
  }

  .info-section {
    padding-bottom: 50px;
  }

  .input-section {
    justify-content: right;
    align-items: right;
  }

  h2 {
    color: var(--main-dark-blue);
    font-size: 24px;
  }

  .blue {
    color: var(--main-dark-blue);
  }
`;

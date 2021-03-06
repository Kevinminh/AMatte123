import React, { Component } from "react";
import "../../../css/Quiz.css";
import styled from "styled-components";

import { Link } from "react-router-dom";

class lessonSecond extends Component {
  render() {
    return (
      <div className="full-width">
        <div className="full-width">
          <div
            className="wistia_responsive_padding"
            style={{ padding: "56.56% 0 0  0" }}
          >
            <div
              className="wistia_responsive_wrapper"
              style={{
                height: "100%",
                left: "0",
                position: "absolute",
                top: "0",
                width: "100%",
                padding: "0 0 0 0"
              }}
            >
              <iframe
                src="https://fast.wistia.net/embed/iframe/234hdmz4yk?videoFoam=true"
                title="video1.mp4"
                allowtransparency="true"
                frameBorder="0"
                scrolling="no"
                className="wistia_embed"
                name="wistia_embed"
                autoPlay="allow"
                width="100%"
                height="100%"
              ></iframe>
            </div>

            <InfoSection>
              <hr className="divider div-transparent"></hr>
              <div className="crs-sec">
                <div className="info-section">
                  <h2>Introduksjon til fart</h2>
                  <p>Videolengde: 24min | Vanskelighetsgrad: lett</p>
                  <button className="quiz-btn-previous">Tilbake</button>
                </div>
                <div className="input-section">
                  <p>Neste: Quiz</p>
                  <button className="quiz-btn">
                    <Link
                      style={{ color: "#fff", textDecoration: "none" }}
                      to="/course/lesson/01"
                    >
                      Neste
                    </Link>
                  </button>
                </div>
              </div>
            </InfoSection>
          </div>
        </div>
        <script
          src="https://fast.wistia.net/assets/external/E-v1.js"
          async
        ></script>
      </div>
    );
  }
}

export default lessonSecond;

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
  }
`;

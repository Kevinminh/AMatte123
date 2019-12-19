import React from "react";
import Img from "../../../images/tabCompOne.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function TabContentOne() {
  return (
    <TabContentContainer>
      <div className="Container">
        <div className="tab-content">
          <div>
            <span className="title" style={{ marginBottom: "2rem" }}>
              <p>
                Våre kurs laget av toppstudenter innen fagfeltet skal hjelpe deg
                med å oppnå topp karakter via trygg gjennomgang,
                kvalitetspørsmål og test-deg-selv oppgaver.
              </p>
            </span>
            <NavLink to="/priser">
              <button className="tabs-btn" style={{ marginTop: "2rem" }}>
                Prøv nå
              </button>
            </NavLink>
          </div>
          <div className="video-container-tab">
            <img src={Img} alt="video-img" />
          </div>
        </div>
      </div>
    </TabContentContainer>
  );
}

export default TabContentOne;

// Media Query

// Main Content Container
const TabContentContainer = styled.div`
  background: #f8f9fa;
  padding: 0px 4rem 0px 4rem;
  color: #273362;

  .container {
    margin: 0 10%;
  }

  img {
    width: 100%;
  }

  .title {
    margin-top: 2rem;
    font-size: 18px;
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 150px 35px 150px 35px;
  }

  // Video container
  .video-container-tab {
    position: relative;
  }

  // VisitVideo
  .visitVideo {
  }

  // Video centered
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

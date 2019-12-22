import React, { Component } from "react";
import styled from "styled-components";
// Icons
import { Icon } from "react-icons-kit";
import { desktop } from "react-icons-kit/fa/desktop";
import { pencil } from "react-icons-kit/fa/pencil";

// Link
import { NavLink } from "react-router-dom";

// All Courses import

class TabContentTwo extends Component {
  render() {
    return (
      <div className="full-width">
        <MidSection className="mid-section-kurser">
          <div className="mid-section-container">
            <div className="mid-section-content">
              <div className="freeCourses-subtitleOffer">
                <p style={{ padding: "0 8%" }}>
                  Få alle våre kurser tilgjengelig idag og benytt dem hvor og
                  når som helst, kun fra
                </p>
                <p style={{ color: "#A6EC98", fontWeight: "900" }}>
                  kr 99,-/måned
                </p>{" "}
              </div>
              <NavLink to="/priser">
                <button className="freeCourse-btn">BESTILL</button>
              </NavLink>
            </div>
            <br></br>
          </div>
        </MidSection>
        <Body className="freeCourseBody">
          <div className="card-container">
            <div className="top">
              <h3>Grunnleggende matematikk</h3>
              <div className="icon-container">
                <span className="icon">
                  <Icon icon={desktop} size={15} aria-hidden="true" /> 1t 23min
                </span>
                <span className="icon">
                  <Icon icon={pencil} size={15} aria-hidden="true" />
                  123 quizoppgaver
                </span>
              </div>
            </div>
            <div className="bottom">
              <a href="/#" className="fake-button">
                Kom i gang
              </a>
            </div>
          </div>
          <div className="card-container">
            <div className="top">
              <h3>Card title</h3>
              <div className="icon-container">
                <span className="icon">
                  <Icon icon={desktop} size={15} aria-hidden="true" /> 1t 23min
                </span>
                <span className="icon">
                  <Icon icon={pencil} size={15} aria-hidden="true" /> 123
                  quizoppgaver
                </span>
              </div>
            </div>
            <div className="bottom">
              <a href="/#" className="fake-button">
                Kom i gang
              </a>
            </div>
          </div>
          <div className="card-container">
            <div className="top">
              <h3>Card title</h3>
              <div className="icon-container">
                <span className="icon">
                  <Icon icon={desktop} size={15} aria-hidden="true" /> 1t 23min
                </span>
                <span className="icon">
                  <Icon icon={pencil} size={15} aria-hidden="true" />
                  123 quizoppgaver
                </span>
              </div>
            </div>
            <div className="bottom">
              <a href="/#" className="fake-button">
                Kom i gang
              </a>
            </div>
          </div>
        </Body>
      </div>
    );
  }
}

export default TabContentTwo;

// Main Tab Content Container
const Body = styled.div`
  //Card container
  .card-container {
    border-radius: 0.5rem;
    box-shadow: 0px 0px 69px -21px rgba(0, 0, 0, 0.45);
    height: 15rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    margin: 0px 15px 0px 15px;
  }

  .card-container:nth-child(1) {
    background: linear-gradient(-45deg, #d4fc79, #96e6a1);
  }
  .card-container:nth-child(2) {
    background: linear-gradient(-45deg, #fad0c4, #ff9a9e);
  }

  .card-container:nth-child(3) {
    background: linear-gradient(-45deg, #a18cd1, #fbc2eb);
  }

  // Top row
  .top {
    border-radius: 0.25rem 0.25rem 0 0;
    padding: 1.85rem;
  }

  .top h3 {
    color: #fff;
    font-size: 20px;
  }
  // Icon container
  .icon-container {
    padding-top: 10px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
  }
  .icon:nth-child(2) {
    padding: 0px 0px 0px 45px;
  }

  // Bottom row
  .bottom {
    padding: 1rem 0 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 5rem 1.5rem 5rem 1.5rem;
  }

  // Button
  .fake-button {
    border-radius: 0.25rem;
    padding: 1.25rem 7rem;
    text-decoration: none;
    color: #273362;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

// Subtitle

const MidSection = styled.div`
  // Tab Top Container
  .mid-section-content {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2.5rem 0;
    width: 100%;
  }

  p {
    font-weight: 500;
  }
`;

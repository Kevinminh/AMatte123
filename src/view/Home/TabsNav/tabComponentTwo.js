import React, { Component } from "react";
import styled from "styled-components";
// Images
import ImgTab1 from "../../../images/tab21.png";
import ImgTab3 from "../../../images/tab23.png";
import ImgTab2 from "../../../images/tab22.png";
import { NavLink } from "react-router-dom";

class TabContentTwo extends Component {
  render() {
    return (
      <TabContainer>
        <div className="tab-content">
          <div className="tab-top-content">
            <span style={{ fontSize: "18px" }}>
              For både grunnskole, ungdomsskole, videregående og universetsnivå!
            </span>
            <NavLink to="/priser">
              <button className="tabs-btn"> Prøv ut nå </button>
            </NavLink>
          </div>
          {/* Tab Bottom Content */}
          <div className="tab-bottom-content">
            {/* TV Image Container */}
            <div>
              <img src={ImgTab1} alt="" style={{ width: "23.75rem" }} />
              <h3>Se på smartelefonen</h3>
              <p>
                Perfekt for deg som har lang reisevei med offentlig transport.
                Bruk tiden nyttig.
              </p>
            </div>
            {/* Tablet Image Container */}
            <div>
              <img
                src={ImgTab2}
                alt=""
                style={{ width: "18.75rem", paddingTop: "0.625rem" }}
              />
              <h3>Se det på din mobiltelefon og tablet</h3>
              <p>
                Hvor som helst og når som helst, kvalitets videoer og
                eksamensspørsmål.
              </p>
            </div>
            {/* Laptop Image Container */}
            <div>
              <img
                src={ImgTab3}
                alt=""
                style={{
                  width: "18.75rem",
                  paddingTop: "0.625rem",
                  paddingBottom: "0rem"
                }}
              />
              <h3>Se det på laptoppen din</h3>
              <p>
                Hvor som helst og når som helst, kvalitets videoer og
                eksamensspørsmål
              </p>
            </div>
          </div>
        </div>
      </TabContainer>
    );
  }
}

export default TabContentTwo;

// Main Tab Content Container
const TabContainer = styled.div`
  background: #f8f9fa;
  color: #273362;

  .tab-content {
    margin: 0 15%;
  }

  // Tab Top Container
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }

  .btn {
    display: inline-block;
    background: #273362;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    border: none;
    outline: none;
    margin: ${props => (props.primary ? "0 33%" : "0")};
    padding: ${props => (props.primary ? "1.5rem" : "0.8rem 1.3rem")};
    border-radius: 0.1875rem;
    font-size: ${props => (props.primary ? "2rem" : "1rem")};
    text-align: center;
    box-shadow: 0 1px 0 rgb(0, 0, 0, 0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    &:hover {
      background: #4259d5;
    }
  }

  img {
    width: 100%;
  }

  // Tab Bottom Content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    padding-bottom: 90px;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 18px;
  }

  p {
    color: var(--main-gray);
    font-size: 16px;
  }
`;

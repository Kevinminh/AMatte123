import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class FeaturesTab extends Component {
  render() {
    return (
      <Body className="feature-container">
        <div className="container-features">
          <div className="card">
            <div>
              <h3>
                Videoforelesninger
                <p>
                  Her får du friheten du alltid har ønsket deg. Enkle og presise
                  videoer med fokus på pensum. Du kan når som helst gå inn på
                  kursvideoene, spole frem og tilbake til innholdet du ønsker å
                  lære mer om. Dyktige kursholdere har sørget for at kursene er
                  optimalisert etter ditt behov, som en elev.
                </p>
                <Link className="main-link" to="#">
                  Read more
                </Link>
              </h3>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>
                Relevante oppgaver
                <p>
                  Quizoppgaver forekommer etter enhver kapittel og tema. Disse
                  er tilknyttet opp mot pensum og eksamen, noe som gjør at
                  quizoppgavene blir ekstremt relevant for deg som studerer
                  matte. Benytt deg av quizene for å få dekket temaene innenfor
                  ditt trinn.
                </p>
                <Link className="main-link" to="#">
                  Read more
                </Link>
              </h3>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>
                Bedre karakter
                <p>
                  Den følelsen når du må sitte timesvis uten å komme frem til
                  riktig svar, vi alle har vært der. Gå tilbake til videon,
                  gjennomgå oppgavene og vipps så har du pensumet i boks! Få
                  bedre karakterer på en mye raskere og smartere måte hos AMatte
                  idag, vær 8 av de 10 med bedre karakter.
                </p>
                <Link className="main-link" to="#">
                  Read more
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </Body>
    );
  }
}

export default FeaturesTab;

const Body = styled.div`
  margin: 0;
  padding: 100px 0 0 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;

  // Container

  // Card
  .card {
    position: relative;
    width: 370px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .card:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: calc(-100% + 4px);
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 1;
    transition: 0.5s ease-in-out;
  }

  // Card Hover

  .card:hover:before {
    bottom: 0;
  }
  // Card Before Hover

  .card: nth-child(1):before {
    background: linear-gradient(-45deg, #d4fc79, #96e6a1);
  }
  .card:nth-child(2):before {
    background: linear-gradient(-45deg, #fad0c4, #ff9a9e);
  }
  .card:nth-child(3):before {
    background: linear-gradient(-45deg, #a18cd1, #fbc2eb);
  }

  // Card Div
  .card div {
    position: relative;
    z-index: 2;
  }

  // Card h3
  .card h3 {
    margin-bottom: 10px;
    font-size: 30px;
    transition: 0.5s;
    color: var(--main-dark-blue);
  }

  // Card p
  .card p {
    font-size: 16px;
    transition: 0.5s;
    color: var(--main-dark-blue);
    padding-top: 15px;
    line-height: 1.5;
  }

  // main-link
  .main-link {
    margin-top: 20px;
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
    transition: 0.5s;
    background: #fff;
    color: var(--main-dark-blue);
    padding: 6px 10px;
    font-weight: 600;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  }

  // h3 and p hover
  .card:hover h3,
  .card:hover p {
    color: #fff;
  }
`;

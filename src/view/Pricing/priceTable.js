import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { graduationCap } from "react-icons-kit/fa/graduationCap";
import { check } from "react-icons-kit/fa/check";
import { Link } from "react-router-dom";

/* import Stripepayment from "../pages/stripepayment"; */

class PriceTable extends Component {
  render() {
    return (
      <Body className="priceTable-body">
        <section className="priceTable-section">
          <h2 className="center">Få tilgang til våre kurser</h2>
          <h3 className="center bottom-padding">
            7 av 10 studenter forbedrer karakteren sin
          </h3>
          <div className="container-fluid">
            <div className="price-container">
              <div className="price-row">
                <div className="col-sm-3">
                  <div className="card text-center">
                    <div className="title">
                      <Icon className="Icon" icon={graduationCap} size={60} />
                      <h2>Grunnskole</h2>
                    </div>
                    <div className="price">
                      <h4>kr 99,-</h4>
                      <p
                        style={{
                          color: "#f8f9fa",
                          marginTop: "-6%",
                          fontWeight: "800"
                        }}
                      >
                        / måned
                      </p>
                      <div className="Option">
                        <ul>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Grunnskole tilgang</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Videoer og oppgaver</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Ingen bindingstid</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Kompendium</span>
                          </li>
                        </ul>
                      </div>
                      <Link className="link-btn" to="/stripe">
                        Start medlemsskap
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center">
                    <div className="title">
                      <Icon className="Icon" icon={graduationCap} size={60} />
                      <h2>Ungdomsskole</h2>
                    </div>
                    <div className="price">
                      <h4>Kr 129,-</h4>{" "}
                      <p
                        style={{
                          color: "#f8f9fa",
                          marginTop: "-6%",
                          fontWeight: "800"
                        }}
                      >
                        / måned
                      </p>
                      <div className="Option">
                        <ul>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Ungdomsskole tilgang</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Videoer og oppgaver</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Ingen bindingtid</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Kompendium</span>
                          </li>
                        </ul>
                      </div>
                      <Link className="link-btn" to="/stripe">
                        Start medlemsskap
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center">
                    <div className="title">
                      <Icon className="Icon" icon={graduationCap} size={60} />
                      <h2>Videregående</h2>
                    </div>
                    <div className="price">
                      <h4>Kr 149,-</h4>{" "}
                      <p
                        style={{
                          color: "#f8f9fa",
                          marginTop: "-6%",
                          fontWeight: "800"
                        }}
                      >
                        / måned
                      </p>
                      <div className="Option">
                        <ul>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>VGS tilgang</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Videoer og oppgaver</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Ingen bindingtid</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Kompendium</span>
                          </li>
                        </ul>
                      </div>
                      <Link className="link-btn" to="/stripe">
                        Start medlemsskap
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card text-center">
                    <div className="title">
                      <Icon className="Icon" icon={graduationCap} size={60} />
                      <h2>Universitet</h2>
                    </div>
                    <div className="price">
                      <h4>Kr 299,-</h4>{" "}
                      <p
                        style={{
                          color: "#f8f9fa",
                          marginTop: "-6%",
                          fontWeight: "800"
                        }}
                      >
                        / måned
                      </p>
                      <div className="Option">
                        <ul>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>UNI/Høgskole</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Videoer og oppgaver</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Ingen bindingtid</span>
                          </li>
                          <li className="bulletPoints">
                            <Icon icon={check} size={15} aria-hidden="true" />
                            <span>Kompendium</span>
                          </li>
                        </ul>
                      </div>
                      <Link className="link-btn" to="/stripe">
                        Start medlemsskap
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="FAQTitle">
          <h5>Ofte stilte spørsmål</h5>
        </div>
        <div className="FAQ-section">
          <div className="question">
            <h4>Hva gir et gratis medlemsskap?</h4>
            <p>
              Ubegrenset tilgang til gratiskurs. Krever ikke betaling med
              bankkort
            </p>
          </div>
          <div className="question">
            <h4>Hva gir et betalt medlemsskap?</h4>
            <p>
              Ubegrenset tilgang til betalt kurs. Krever betaling med bankkort.
            </p>
          </div>
          <div className="question">
            <h4>Hva lærer jeg med AMatte?</h4>
            <p>
              Du lærer akkuratt det du trenger for å oppnå de beste karakterene.
            </p>
          </div>
        </div>
        <div className="FAQ-section" style={{ paddingBottom: "5%" }}>
          <div className="question">
            <h4>Får jeg gratis hjelp?</h4>
            <p>
              Ja, og vi hjelper deg mer enn gjerne. Benytt deg av mailen vår.
            </p>
          </div>
          <div className="question">
            <h4>Er det bindingstid?</h4>
            <p>Nei, det er ingen bindingstid. Avslutt når det passer deg.</p>
          </div>
          <div className="question">
            <h4>Hvordan stopper jeg?</h4>
            <p>Gå til "Min profil" > Medlemskap > Åpne > Stopp medlemskap".</p>
          </div>
        </div>
        <div className="divider-1"></div>
      </Body>
    );
  }
}

export default PriceTable;

const Body = styled.div`
  margin: 0;
  padding: 0;

  // Section


  h2 {
    font-size: 40px;
    font-weight: 700;
    color: var(--main-dark-blue);
    
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }

  h5 {
    font-size: 32px;
    font-weight: 700;
    color: var(--main-dark-blue);
  }

  p:nth-child(0) {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }

  // card
  .card {
    position: relative;
    max-width: 350px;
    height: auto;
    border-radius: 15px;
    margin: 0 auto;
    padding: 40px 20px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
    transition: 0.5s;
    overflow: hidden;
    }

    .card:hover {
        transform: scale(1.1);
    }

  //Col-sm-3 .1stcard
  .col-sm-3:nth-child(1) .card,
  .col-sm-3:nth-child(1) .card .title .Icon {
    background: linear-gradient(-45deg, #d4fc79, #96e6a1);
  }
  //Col-sm-3 .2 ndcard
  .col-sm-3:nth-child(2) .card,
  .col-sm-3:nth-child(2) .card .title .Icon {
    background: linear-gradient(-45deg, #fad0c4, #ff9a9e);
  }
  //Col-sm-3 .3ndcard
  .col-sm-3:nth-child(3) .card,
  .col-sm-3:nth-child(3) .card .title .Icon {
    background: linear-gradient(-45deg, #a18cd1, #fbc2eb);
  }
  //Col-sm-3 .4th card
  .col-sm-3:nth-child(4) .card,
  .col-sm-3:nth-child(4) .card .title .Icon {
    background: linear-gradient(-45deg, #667eea, #764ba2);
  }

  //Card Before (White grading)
  .card:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1;
    transform: skewY(-5deg) scale(1.5);
  }

  // Icons
  .title .Icon {
    color: #fff;
    font-size: 60px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  }

  //H2 title
  .title h2 {
    position: relative;
    margin: 20px 0 0;
    padding: 0;
    color: #fff;
    font-size: 24px;
    z-index: 2;
  }

  //The price
  .price {
    position: relative;
    z-index: 2;
  }

  .price h4 {
    margin: 0;
    padding: 20px 0;
    color: #fff;
    font-size: 48px;
  }

  // Options
  .option {
    position: relative;
    z-index: 2;
    }
  }

  .option ul {
    margin: 0;
    padding: 0;
    }
  }

  //Bullet points
  .bulletPoints {
    margin: 0 55px 10px 0px;
    padding: 0;
    list-style: none;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    cursor-pointer: none;
    &hover: {
      curser-pointer: none;
    }
  }

  .bulletPoints li {
    text-decoration: none;
    cursor-pointer: none;
  }

  // Link
  .link-btn {
    position: relative;
    z-index: 2;
    background: #fff;
    color: #262626;
    width: 165px;
    height: 40px;
    line-height: 40px;
    border-radius: 15px;
    display: block;
    text-align: center;
    margin 20px auto 0;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  }
  .link-btn:hover {
      transition: 0.2s ease-in;
      color: var(--main-dark-blue);
      background: linear-gradient(-45deg, #f8f9fa, #f8f9fa);
  }

  // FAQ SECTION
  .FAQTitle {
    text-align: center;
    padding: 125px 0 35px 0;
  }

  .FAQ-section {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin: 0 0;
    padding: 1.5% 20%;
    text-align: center;
  }

  .question {
    padding: 0 20%;
  }
`;

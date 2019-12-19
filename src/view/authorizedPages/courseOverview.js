import React from "react";
import LoggedInFooter from "../Navigation/loggedInFooter";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Users extends React.Component {
  render() {
    return (
      <Body>
        <div>
          <div className="courseOverview-body">
            <div className="courseOverview-container">
              <div className="kul">
                <div className="courseOverview-box">
                  <div className={this.props.title}>
                    <h3>{this.props.navn}</h3>
                    <p>Du har kun tilgang til første delen av dette kurset</p>

                    <p
                      data-tooltip={this.props.tooltip}
                      className="toolTipHover"
                    >
                      Info om kurset
                    </p>
                  </div>

                  <div className="courseOverview-btn">
                    <Link
                      style={{
                        color: "#fff",
                        textDecoration: "none"
                      }}
                      to={this.props.enroll}
                    >
                      <button
                        style={{ width: "50%", marginLeft: "50%" }}
                        className={this.props.button}
                      >
                        Kjøp
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="courseOverview-info">
                  <div className="courseOverview-search">
                    <h2>Kursinnhold</h2>
                    <h3>Søk etter innhold</h3>
                    <input
                      className="courseOverview-itemSearch"
                      placeholder="Søk..."
                    ></input>
                  </div>
                  <div className="courseOverview-vidLength">
                    <p>Videolengde</p>

                    <p>Quizoppgaver</p>
                    <p>{this.props.tid}</p>
                    <p>{this.props.oppgaver}</p>
                  </div>
                  <div></div>
                  <div></div>
                </div>
                <div></div>
                <div className="infoSection">
                  <div className="info-table1">
                    <p>Oversikt</p>

                    <p>Videolengde</p>

                    <p>Antall oppgaver</p>
                  </div>
                  <hr />

                  {/* FIRST ROW */}
                  <div>
                    <details className="info-expand">
                      <summary className="info-expand">
                        <div className="info-table">
                          <h5>{this.props.kap1}</h5>

                          <h5>{this.props.kap1L}</h5>

                          <h5>{this.props.kap1Q}</h5>
                        </div>
                      </summary>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap1s}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap1Ls}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap1Qs}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap1s1}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap1Ls1}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap1Qs1}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap1s2}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap1Ls2}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap1Qs2}
                          </h5>
                        </div>
                      </Link>

                      <div className={this.props.row1s4}>
                        <Link
                          className="info-table-link"
                          to={this.props.kap1sNav}
                        >
                          <div className="info-table inner">
                            <h5 className="margin-right">
                              {this.props.kap1s3}
                            </h5>

                            <h5 style={{ fontWeight: "400" }}>
                              {this.props.kap1Ls3}
                            </h5>

                            <h5 style={{ fontWeight: "400" }}>
                              {this.props.kap1Qs3}
                            </h5>
                          </div>
                        </Link>
                      </div>

                      <div className={this.props.row1s5}>
                        <Link
                          className="info-table-link"
                          to={this.props.kap1sNav}
                        >
                          <div className="info-table inner">
                            <h5 className="margin-right">
                              {this.props.kap1s4}
                            </h5>

                            <h5 style={{ fontWeight: "400" }}>
                              {this.props.kap1Ls4}
                            </h5>

                            <h5 style={{ fontWeight: "400" }}>
                              {this.props.kap1Qs4}
                            </h5>
                          </div>
                        </Link>
                      </div>
                    </details>
                    <hr />
                  </div>

                  {/* SECOND ROW */}
                  <div>
                    <details className="info-expand">
                      <summary className="info-expand">
                        <div className="info-table">
                          <h5>{this.props.kap2}</h5>

                          <h5>{this.props.kap2L}</h5>

                          <h5>{this.props.kap2Q}</h5>
                        </div>
                      </summary>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap2s}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap2Ls}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap2Qs}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap2s1}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap2Ls1}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap2Qs1}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap2s2}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap2Ls2}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap2Qs2}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap2s3}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap2Ls3}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap2Qs3}
                          </h5>
                        </div>
                      </Link>
                    </details>
                    <hr />
                  </div>

                  {/* THIRD ROW */}
                  <div>
                    <details className="info-expand">
                      <summary className="info-expand">
                        <div className="info-table">
                          <h5>{this.props.kap3}</h5>

                          <h5>{this.props.kap3L}</h5>

                          <h5>{this.props.kap3Q}</h5>
                        </div>
                      </summary>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap3s}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap3Ls}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap3Qs}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap3s1}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap3Ls1}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap3Qs1}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap3s2}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap3Ls2}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap3Qs2}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap3s3}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap3Ls3}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap3Qs3}
                          </h5>
                        </div>
                      </Link>
                    </details>
                    <hr />
                  </div>

                  {/* FOURTH ROW */}
                  <div className={this.props.style4}>
                    <details className="info-expand">
                      <summary className="info-expand">
                        <div className="info-table">
                          <h5>{this.props.kap4}</h5>

                          <h5>{this.props.kap4L}</h5>

                          <h5>{this.props.kap4Q}</h5>
                        </div>
                      </summary>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap4s}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap4Ls}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap4Qs}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap4s1}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap4Ls1}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap4Qs1}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap4s2}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap4Ls2}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap4Qs2}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap4s3}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap4Ls3}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap4Qs3}
                          </h5>
                        </div>
                      </Link>
                    </details>
                    <hr />
                  </div>

                  {/* FITH ROW */}
                  <div className={this.props.row5}>
                    <details className="info-expand">
                      <summary className="info-expand">
                        <div className="info-table">
                          <h5>{this.props.kap5}</h5>

                          <h5>{this.props.kap5L}</h5>

                          <h5>{this.props.kap5Q}</h5>
                        </div>
                      </summary>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap5s}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap5Ls}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap5Qs}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap5s1}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap5Ls1}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap5Qs1}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap5s2}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap5Ls2}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap5Qs2}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap5s3}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap5Ls3}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap5Qs3}
                          </h5>
                        </div>
                      </Link>
                    </details>
                    <hr />
                  </div>

                  {/* SIXTH ROW */}
                  <div className={this.props.row6}>
                    <details className="info-expand">
                      <summary className="info-expand">
                        <div className="info-table">
                          <h5>{this.props.kap6}</h5>

                          <h5>{this.props.kap6L}</h5>

                          <h5>{this.props.kap6Q}</h5>
                        </div>
                      </summary>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap6s}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap6Ls}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap6Qs}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap6s1}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap6Ls1}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap6Qs1}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap6s2}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap6Ls2}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap6Qs2}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap6s3}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap6Ls3}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap6Qs3}
                          </h5>
                        </div>
                      </Link>
                    </details>
                    <hr />
                  </div>

                  {/* SIXTH ROW */}
                  <div className={this.props.row7}>
                    <details className="info-expand">
                      <summary className="info-expand">
                        <div className="info-table">
                          <h5>{this.props.kap7}</h5>

                          <h5>{this.props.kap7L}</h5>

                          <h5>{this.props.kap7Q}</h5>
                        </div>
                      </summary>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap7s}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap7Ls}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap7Qs}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap7s1}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap7Ls1}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap7Qs1}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap7s2}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap7Ls2}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap7Qs2}
                          </h5>
                        </div>
                      </Link>
                      <Link
                        className="info-table-link"
                        to={this.props.kap1sNav}
                      >
                        <div className="info-table inner">
                          <h5 className="margin-right">{this.props.kap7s3}</h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap7Ls3}
                          </h5>

                          <h5 style={{ fontWeight: "400" }}>
                            {this.props.kap7Qs3}
                          </h5>
                        </div>
                      </Link>

                      <div className={this.props.row7s5}>
                        <Link
                          className="info-table-link"
                          to={this.props.kap1sNav}
                        >
                          <div className="info-table inner">
                            <h5 className="margin-right">
                              {this.props.kap7s4}
                            </h5>

                            <h5 style={{ fontWeight: "400" }}>
                              {this.props.kap7Ls4}
                            </h5>

                            <h5 style={{ fontWeight: "400" }}>
                              {this.props.kap7Qs4}
                            </h5>
                          </div>
                        </Link>
                      </div>
                    </details>
                    <hr />
                  </div>

                  {/* EIGTH ROW */}
                  <div className={this.props.row7}>
                    <details className="info-expand">
                      <summary className="info-expand">
                        <div className="info-table">
                          <h5>{this.props.test}</h5>

                          <h5>{this.props.testL}</h5>

                          <h5>{this.props.testQ}</h5>
                        </div>
                      </summary>
                    </details>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="courseOverview-box">
                <div className="courseOverview-title">
                  <h3>Prøv kurset</h3>
                </div>
                <div className="courseOverview-btn">
                  <button className={this.props.button}>Prøv</button>
                </div>
              </div>
            </div>
          </div>
          <LoggedInFooter />
        </div>
      </Body>
    );
  }
}

export default Users;

const Body = styled.div`
  .info-table {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-right: 2%;

    &:hover {
      background: var(--main-light-gray);
    }
  }

  .info-table1 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-right: 2%;
  }

  .infoSection {
    margin-top: -4%;
  }

  .info-table-link {
    text-decoration: none;
  }

  .info-table1 p {
    font-weight: bold;
    color: var(--main-dark-blue);
    font-size: 12px;
    text-transform: uppercase;
  }

  h5 {
    color: #2b303b;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.8px;
  }

  h3 {
    font-weight: 700;
  }

  .info-expand {
    border: none;
    cursor: pointer;
    outline: none;
  }

  .inner {
    padding: 25px 0 5px 0;
  }

  .margin-right {
    margin: 0 0 0 2.5%;
  }

  .toolTipHover {
    font-weight: 700;
    text-decoration: underline;
  }
`;

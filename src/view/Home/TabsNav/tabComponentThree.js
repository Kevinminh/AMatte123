import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import { NavLink } from "react-router-dom";

class TabContentThree extends Component {
  render() {
    return (
      <TabContainer>
        <div className="tab-content">
          <div className="tab-top-content">
            <span style={{ fontSize: "18px" }}>
              Velg en plan som passer for deg
            </span>
            <NavLink to="/priser">
              <button className="tabs-btn">Prøv ut nå</button>
            </NavLink>
          </div>
          {/* Tab Bottom Content */}
          <div className="tab-bottom-content">
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th
                    style={{
                      textTransform: "uppercase",
                      color: "var(--grunnskole)"
                    }}
                  >
                    Grunnskole
                  </th>
                  <th
                    style={{
                      textTransform: "uppercase",
                      color: "var(--ungdom)"
                    }}
                  >
                    Ungdomsskole
                  </th>
                  <th
                    style={{
                      textTransform: "uppercase",
                      color: "var(--vgs)"
                    }}
                  >
                    Videregående
                  </th>
                  <th
                    style={{ textTransform: "uppercase", color: "var(--uni)" }}
                  >
                    Universitets-nivå
                  </th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "700" }}>Månedlig pris</td>
                  <td
                    style={{
                      fontWeight: "900",
                      color: "var(--grunnskole)"
                    }}
                  >
                    kr 99,-
                  </td>
                  <td
                    style={{
                      fontWeight: "700",
                      color: "var(--ungdom)"
                    }}
                  >
                    kr 129,-
                  </td>
                  <td
                    style={{
                      fontWeight: "700",
                      color: "var(--vgs)"
                    }}
                  >
                    kr 159,-
                  </td>
                  <td
                    style={{
                      fontWeight: "700",
                      color: "var(--uni)"
                    }}
                  >
                    kr 259,-
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Tilgang til kurs</td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
                <tr>
                  <td>Eksamensspørsmål</td>
                  <td>
                    <Icon icon={cross} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
                <tr>
                  <td>Videolengde og quizoppgaver</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Videoer og oppgaver</td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
                <tr>
                  <td>Kompendium</td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
                <tr>
                  <td>Avbryt når som helst</td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                  <td>
                    <Icon icon={checkmark} size={10} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        "
      </TabContainer>
    );
  }
}

export default TabContentThree;

// Main Tab Content Container
const TabContainer = styled.div`
  background: #f8f9fa;

  .tab-content {
    margin: 0 15%;
    padding-bottom: 1%;
    color: #273362;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat (12, 1fr);
    padding: 3rem 0 0;
  }

  span {
    grid-column: 3 / 9;
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

  // Tab Bottom Content
  .tab-bottom-content {
    margin: 2rem auto;
  }

  // Table
  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }

  .table .thead th {
    transform: uppercase;
    padding: 0.8rem;
  }

  table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  table tbody tr td {
    color: #000;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:ntn-child(even) {
    background: #222;
  }
`;

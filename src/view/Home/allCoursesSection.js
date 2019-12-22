import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { desktop } from "react-icons-kit/fa/desktop";
import { pencil } from "react-icons-kit/fa/pencil";
import "../../css/CourseCards.css";

// All Courses
import {
  Kurs0,
  Kurs1,
  Kurs2,
  Kurs3,
  Kurs4,
  Kurs5,
  Kurs6,
  Kurs7,
  Kurs8,
  Kurs9,
  Kurs10,
  p1,
  p2,
  t1,
  s1,
  s2,
  r1,
  r2,
  MEK1000,
  MEK2000
} from "../../modules/api/courseData/courseInfo";

class KurserTest extends Component {
  render() {
    return (
      <div className="padding-top">
        {/* End widget span */}
        <span className="alleKurser-mainTitle">Alle kurser</span>
        <div className="allCoursesBody">
          <div className="AC-card-container">
            <div className="AC-top">
              <h3>{Kurs0.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs0.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                    style={{ paddingRight: "7px" }}
                  />
                  {Kurs0.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top">
              <h3>{Kurs1.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs1.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs1.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top">
              <h3>{Kurs2.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs2.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs2.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button">
                Kom i gang
              </Link>
            </div>
          </div>
        </div>
        <div className="allCoursesBody">
          <div className="AC-card-container">
            <div className="AC-top">
              <h3>{Kurs3.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs3.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs3.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top">
              <h3>{Kurs4.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs4.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs4.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top">
              <h3>{Kurs5.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs5.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs5.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button">
                Kom i gang
              </Link>
            </div>
          </div>
        </div>
        <div className="allCoursesBody">
          <div className="AC-card-container">
            <div className="AC-top">
              <h3>{Kurs6.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs6.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs6.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top">
              <h3>{Kurs7.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs7.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs7.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top-ungdom">
              <h3>{Kurs8.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs8.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs8.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-ungdom">
                Kom i gang
              </Link>
            </div>
          </div>
        </div>
        <div className="allCoursesBody">
          <div className="AC-card-container">
            <div className="AC-top-ungdom">
              <h3>{Kurs9.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs9.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs9.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-ungdom">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top-ungdom">
              <h3>{Kurs10.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs10.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {Kurs10.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-ungdom">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top-vgs">
              <h3>{p1.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {p1.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {p1.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-vgs">
                Kom i gang
              </Link>
            </div>
          </div>
        </div>
        <div className="allCoursesBody">
          <div className="AC-card-container">
            <div className="AC-top-vgs">
              <h3>{p2.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {p2.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {p2.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-vgs">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top-vgs">
              <h3>{t1.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {t1.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {t1.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-vgs">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top-vgs">
              <h3>{p2.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {p2.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {p2.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-vgs">
                Kom i gang
              </Link>
            </div>
          </div>
        </div>
        <div className="allCoursesBody">
          <div className="AC-card-container">
            <div className="AC-top-vgs">
              <h3>{s1.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {s1.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {s1.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-vgs">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top-vgs">
              <h3>{s2.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {s2.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {s2.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-vgs">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top-vgs">
              <h3>{r1.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {s2.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {r1.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-vgs">
                Kom i gang
              </Link>
            </div>
          </div>
        </div>
        <div className="allCoursesBody">
          <div className="AC-card-container">
            <div className="AC-top-vgs">
              <h3>{r2.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {r2.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {r2.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="/kurs" className="AC-button-vgs">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top-uni">
              <h3>{MEK1000.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {MEK1000.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {MEK1000.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="kurs" className="AC-button-uni">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="AC-top-uni">
              <h3>{MEK2000.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />{" "}
                  {MEK2000.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                  />
                  {MEK2000.oppgaver}
                </span>
              </div>
            </div>
            <div className="AC-bottom">
              <Link to="kurs" className="AC-button-uni">
                Kom i gang
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KurserTest;

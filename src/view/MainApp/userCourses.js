import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";

import { desktop } from "react-icons-kit/fa/desktop";
import { pencil } from "react-icons-kit/fa/pencil";

import "../../css/CourseCards.css";

import Course from "./component";

// All Courses
import { Kurs0, Kurs1, Kurs8 } from "../../modules/api/courseData/courseInfo";

class KursApp extends Component {
  render() {
    return (
      // FIRST SECTION //
      <div className="availableCourses full-width">
        <div className="AV-mainContainer">
          <div className="AV-pageTitleContainer">
            <h1>Kurs hos AMatte</h1>
            <h3>Mine tilgjengelige kurser</h3>
          </div>
          <div className="divider-2"></div>
        </div>
        <div className="AV-course-container">
          <div className="AC-card-container">
            <div className="wordpress">
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
            <div className="AV-bottom">
              <Link to="/kurs0/00" className="AV-course-btn">
                Kursoversikt
              </Link>
              <Link to="/kurs0/lesson/00" className="wordpress-start-btn">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="shopify">
              <h3>{Kurs1.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs1.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                    style={{ paddingRight: "7px" }}
                  />
                  {Kurs1.oppgaver}
                </span>
              </div>
            </div>
            <div className="AV-bottom">
              <Link to="/kurs1/01" className="AV-course-btn">
                Kursoversikt
              </Link>
              <Link to="/kurs1/lesson/01" className="shopify-start-btn">
                Kom i gang
              </Link>
            </div>
          </div>
          <div className="AC-card-container">
            <div className="photoshop">
              <h3>{Kurs8.navn}</h3>
              <div className="AC-icon-container">
                <span className="AC-icon">
                  <Icon
                    style={{ paddingRight: "7px" }}
                    icon={desktop}
                    size={15}
                    aria-hidden="true"
                  />
                  {Kurs8.tid}
                </span>
                <span className="AC-icon">
                  <Icon
                    icon={pencil}
                    size={15}
                    aria-hidden="true"
                    style={{ paddingRight: "7px" }}
                  />
                  {Kurs8.oppgaver}
                </span>
              </div>
            </div>
            <div className="AV-bottom">
              <Link to="/kurs8/08" className="AV-course-btn">
                Kursoversikt
              </Link>
              <Link to="/kurs8/lesson/08" className="photoshop-start-btn">
                Kom i gang
              </Link>
            </div>
          </div>
        </div>
        {/* END FIRST SECTION // // SEARCH SECTION */}
        <div>
          <Course />
        </div>
      </div>
    );
  }
}

export default KursApp;

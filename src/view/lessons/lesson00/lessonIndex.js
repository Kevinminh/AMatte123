import React, { Component } from "react";
import { Router, Route, NavLink, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import styled from "styled-components";
import "../../../css/Quiz.css";
import Accordion from "react-bootstrap/Accordion";

import Comp from "./lessonComponent";
import Footer from "../../Navigation/loggedInFooter";

// Icon
import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { toggleLeft } from "react-icons-kit/fa/toggleLeft";
import { Kurs0 as Course } from "../../../modules/api/courseData/courseInfo";

// Navigation
import { Kurs0Nav as Nav } from "../../../modules/api/courseData/courseNavigation";

// Import the video lessons
import Intro from "./video/intro";
import Kap1s from "./video/kap1/kap1s";
import Kap1s1 from "./video/kap1/kap1s1";
import Kap1s2 from "./video/kap1/kap1s2";
import Kap1s3 from "./video/kap1/kap1s3";
import Kap2s from "./video/kap2/kap2s";
import Kap2s1 from "./video/kap2/kap2s1";
import Kap2s2 from "./video/kap2/kap2s2";
import Kap2s3 from "./video/kap2/kap2s3";
import Kap3s from "./video/kap3/kap3s";
import Kap3s1 from "./video/kap3/kap3s1";
import Kap3s2 from "./video/kap3/kap3s2";
import Kap3s3 from "./video/kap3/kap3s3";
import Kap4s from "./video/kap4/kap4s";
import Kap4s1 from "./video/kap4/kap4s1";
import Kap4s2 from "./video/kap4/kap4s2";
import Kap4s3 from "./video/kap4/kap4s3";
import Kap5s from "./video/kap5/kap5s";
import Kap5s1 from "./video/kap5/kap5s1";
import Kap5s2 from "./video/kap5/kap5s2";
import Kap5s3 from "./video/kap5/kap5s3";

// Import the quiz lessons
import Kap1sQuiz from "./quiz/kap1/kap1s";
import Kap1s1Quiz from "./quiz/kap1/kap1s1";
import Kap1s2Quiz from "./quiz/kap1/kap1s2";
import Kap1s3Quiz from "./quiz/kap1/kap1s3";
import Kap2sQuiz from "./quiz/kap2/kap2s";
import Kap2s1Quiz from "./quiz/kap2/kap2s1";
import Kap2s2Quiz from "./quiz/kap2/kap2s2";
import Kap2s3Quiz from "./quiz/kap2/kap2s3";
import Kap3sQuiz from "./quiz/kap3/kap3s";
import Kap3s1Quiz from "./quiz/kap3/kap3s1";
import Kap3s2Quiz from "./quiz/kap3/kap3s2";
import Kap3s3Quiz from "./quiz/kap3/kap3s3";
import Kap4sQuiz from "./quiz/kap4/kap4s";
import Kap4s1Quiz from "./quiz/kap4/kap4s1";
import Kap4s2Quiz from "./quiz/kap4/kap4s2";
import Kap4s3Quiz from "./quiz/kap4/kap4s3";
import Kap5sQuiz from "./quiz/kap5/kap5s";
import Kap5s1Quiz from "./quiz/kap5/kap5s1";
import Kap5s2Quiz from "./quiz/kap5/kap5s2";
import Kap5s3Quiz from "./quiz/kap5/kap5s3";

const history = createBrowserHistory();

class LessonIndex extends Component {
  render() {
    return (
      <div>
        <div className="">
          <Body>
            <div className="overall-container">
              <div className="nav-container">
                <p className="course-link flexContent">
                  <NavLink className="course-link" to={Course.lesson}>
                    <Icon
                      icon={chevronLeft}
                      size={15}
                      style={{ paddingRight: "10px" }}
                    ></Icon>
                    Tiblake til kursoversikt
                  </NavLink>

                  <NavLink to="/kurs0/lesson/00">
                    <Icon icon={toggleLeft} size={"25px"}></Icon>
                  </NavLink>
                </p>
                <Router history={history}>
                  <div className={Course.title}>
                    <h3>{Course.navn}</h3>
                  </div>
                  {/* ACCORDION START */}
                  <AccordSec>
                    <Accordion className="grid-center" defaultActiveKey="">
                      {/* FIRST ACCORDION */}

                      <Comp
                        // CHAPTER 1
                        kap1={Course.kap1}
                        kap1s={Course.kap1s}
                        kap1s1={Course.kap1s1}
                        kap1s2={Course.kap1s2}
                        kap1s3={Course.kap1s3}
                        kap1s4={Course.kap1s4}
                        kap1Ts={Course.kap1Ts}
                        kap1Qs={Course.kap1Qs}
                        kap1Ts1={Course.kap1Ts1}
                        kap1Qs1={Course.kap1Qs}
                        kap1Ts2={Course.kap1Ts2}
                        kap1Qs2={Course.kap1Qs2}
                        kap1Ts3={Course.kap1Ts3}
                        kap1Qs3={Course.kap1Qs3}
                        // CHAPTER 2
                        kap2={Course.kap2}
                        kap2s={Course.kap2s}
                        kap2s1={Course.kap2s1}
                        kap2s2={Course.kap2s2}
                        kap2s3={Course.kap2s3}
                        kap2s4={Course.kap2s4}
                        kap2Ts={Course.kap2Ts}
                        kap2Qs={Course.kap2Qs}
                        kap2Ts1={Course.kap2Ts1}
                        kap2Qs1={Course.kap2Qs1}
                        kap2Ts2={Course.kap2Ts2}
                        kap2Qs2={Course.kap2Qs2}
                        kap2Ts3={Course.kap2Ts3}
                        kap2Qs3={Course.kap2Qs3}
                        // CHAPTER 3
                        kap3={Course.kap3}
                        kap3s={Course.kap3s}
                        kap3s1={Course.kap3s1}
                        kap3s2={Course.kap3s2}
                        kap3s3={Course.kap3s3}
                        kap3s4={Course.kap3s4}
                        kap3Ts={Course.kap3Ts}
                        kap3Qs={Course.kap3Qs}
                        kap3Ts1={Course.kap3Ts1}
                        kap3Qs1={Course.kap3Qs1}
                        kap3Ts2={Course.kap3Ts2}
                        kap3Qs2={Course.kap3Qs2}
                        kap3Ts3={Course.kap3Ts3}
                        kap3Qs3={Course.kap3Qs3}
                        // CHAPTER 4
                        kap4={Course.kap4}
                        kap4s={Course.kap4s}
                        kap4s1={Course.kap4s1}
                        kap4s2={Course.kap4s2}
                        kap4s3={Course.kap4s3}
                        kap4s4={Course.kap4s4}
                        kap4Ts={Course.kap4Ts}
                        kap4Qs={Course.kap4Qs}
                        kap4Ts1={Course.kap4Ts1}
                        kap4Qs1={Course.kap4Qs1}
                        kap4Ts2={Course.kap4Ts2}
                        kap4Qs2={Course.kap4Qs2}
                        kap4Ts3={Course.kap4Ts3}
                        kap4Qs3={Course.kap4Qs3}
                        // CHAPTER 4
                        kap5={Course.kap5}
                        kap5s={Course.kap5s}
                        kap5s1={Course.kap5s1}
                        kap5s2={Course.kap5s2}
                        kap5s3={Course.kap5s3}
                        kap5s5={Course.kap5s5}
                        kap5Ts={Course.kap5Ts}
                        kap5Qs={Course.kap5Qs}
                        kap5Ts1={Course.kap5Ts1}
                        kap5Qs1={Course.kap5Qs1}
                        kap5Ts2={Course.kap5Ts2}
                        kap5Qs2={Course.kap5Qs2}
                        kap5Ts3={Course.kap5Ts3}
                        kap5Qs3={Course.kap5Qs3}
                      />
                    </Accordion>
                  </AccordSec>
                </Router>
              </div>

              <div className="lesson-container">
                <Router history={history}>
                  <Switch>
                    <Route path={Nav.kap1s} component={Kap1s} />
                    <Route path={Nav.kap1sQuiz} component={Kap1sQuiz} />
                    <Route path={Nav.kap1s1} component={Kap1s1} />
                    <Route path={Nav.kap1s1Quiz} component={Kap1s1Quiz} />
                    <Route path={Nav.kap1s2} component={Kap1s2} />
                    <Route path={Nav.kap1s2Quiz} component={Kap1s2Quiz} />
                    <Route path={Nav.kap1s3} component={Kap1s3} />
                    <Route path={Nav.kap1s3Quiz} component={Kap1s3Quiz} />

                    <Route path={Nav.kap2s} component={Kap2s} />
                    <Route path={Nav.kap2sQuiz} component={Kap2sQuiz} />
                    <Route path={Nav.kap2s1} component={Kap2s1} />
                    <Route path={Nav.kap2s1Quiz} component={Kap2s1Quiz} />
                    <Route path={Nav.kap2s2} component={Kap2s2} />
                    <Route path={Nav.kap2s2Quiz} component={Kap2s2Quiz} />
                    <Route path={Nav.kap2s3} component={Kap2s3} />
                    <Route path={Nav.kap2s3Quiz} component={Kap2s3Quiz} />

                    <Route path={Nav.kap3s} component={Kap3s} />
                    <Route path={Nav.kap3sQuiz} component={Kap3sQuiz} />
                    <Route path={Nav.kap3s1} component={Kap3s1} />
                    <Route path={Nav.kap3s1Quiz} component={Kap3s1Quiz} />
                    <Route path={Nav.kap3s2} component={Kap3s2} />
                    <Route path={Nav.kap3s2Quiz} component={Kap3s2Quiz} />
                    <Route path={Nav.kap3s3} component={Kap3s3} />
                    <Route path={Nav.kap3s3Quiz} component={Kap3s3Quiz} />

                    <Route path={Nav.kap4s} component={Kap4s} />
                    <Route path={Nav.kap4sQuiz} component={Kap4sQuiz} />
                    <Route path={Nav.kap4s1} component={Kap4s1} />
                    <Route path={Nav.kap4s1Quiz} component={Kap4s1Quiz} />
                    <Route path={Nav.kap4s2} component={Kap4s2} />
                    <Route path={Nav.kap4s2Quiz} component={Kap4s2Quiz} />
                    <Route path={Nav.kap4s3} component={Kap4s3} />
                    <Route path={Nav.kap4s3Quiz} component={Kap4s3Quiz} />

                    <Route path={Nav.kap5s} component={Kap5s} />
                    <Route path={Nav.kap5sQuiz} component={Kap5sQuiz} />
                    <Route path={Nav.kap5s1} component={Kap5s1} />
                    <Route path={Nav.kap5s1Quiz} component={Kap5s1Quiz} />
                    <Route path={Nav.kap5s2} component={Kap5s2} />
                    <Route path={Nav.kap5s2Quiz} component={Kap5s2Quiz} />
                    <Route path={Nav.kap5s3} component={Kap5s3} />
                    <Route path={Nav.kap5s3Quiz} component={Kap5s3Quiz} />
                    <Route path="/" component={Intro} />
                  </Switch>
                </Router>
              </div>
            </div>
          </Body>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LessonIndex;

const Body = styled.div`
  padding: 0;
  margin: 0;
  background-color: #f8f9fa;


  .overall-container {
    padding: 30px 50px;
    display: grid;
    position: relative;
    width: 100%;
    grid-template-columns: 32% 65.5%;
    grid-row-gap: 15px;
    grid-column-gap: 2.5%;

    .nav-container {
      background: #fff;
      border-radius: 10px;
      padding: 25px;
      box-shadow: 0px 0px 10px 3px rgba(27, 202, 255, 0.05);
    }


    .course-link {
      text-decoration: none;
      font-size: 14px;
      color: var(--main-dark-gray);
      
    }

    .regular {
      font-weight: 500;
    }

    h3 {
      text-align: center;
      padding-bottom: 7px;
      font-weight: bold;
      font-size: 23px;
    }

    .grid-center {
      display: grid;
      grid-template-columns: 1fr;

    }


    
    h4{
      font-size: 15px;
      padding-bottom: 12px;
      text-align: center;
      color: var(--main-dark-blue);
    }

    a {
      color: var(--main-dark-blue);
    }

    .flexContent {
      display: flex;
      justify-content: space-between;
    }


    .courseInfo {
      font-size: 13px;
    }
`;

const AccordSec = styled.div`
  .title {
    background: transparent;
    border: none;
    color: #283464;
    font-weight: 900;
    fontsize: 16px;

    border-radius: 5px;
    height: 5vh;
    &:hover {
      cursor: pointer;
      background: #f8f9fa;
      border-radius: 5px;
    }
  }

  .light {
    font-weight: 400;
  }

  .16px {
    font-weight: 16px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .nomargin {
    margin-top: -5%;
  }

  p {
    font-size: 13px;
  }

  .progress {
    margin-top: -10px;
  }

  .fullwidth {
    width: 100%;
  }

  .half-width {
    width: 20%;
  }

  h3 {
    text-align: center;
    padding-bottom: 7px;
    font-weight: bold;
    font-size: 23px;
  }

  .grid-center {
    display: grid;
    grid-template-columns: 1fr;
  }
  .courseInfo {
    font-size: 13px;
  }

  h4 {
    font-size: 15px;
    padding-bottom: 12px;
    text-align: center;
    color: var(--main-dark-blue);
  }

  h5 {
    font-size: 16px;
  }

  a {
    color: var(--main-dark-blue);
  }
`;

import React from "react";
import { Router, Route, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";


// Import the lessons
import Lesson1 from "./lesson1";
import Lesson2 from "./lesson2";
import Lesson3 from "./lesson3";
import Lesson4 from "./lesson4";

import styled from "styled-components";
import "../../../css/Quiz.css";
import Accordion from "../accordion";

import ListItem from "@material-ui/core/ListItem";

// Icon
import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { desktop } from "react-icons-kit/fa/desktop";
import { pencil } from "react-icons-kit/fa/pencil";

//Import courseOverview
const history = createBrowserHistory();

const Routes = props => {
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <div className="">
        <Body>
          <div className="overall-container">
            <div className="nav-container">
              <p className="course-link">
                <NavLink className="course-link" to={props.lesson}>
                  <Icon
                    icon={chevronLeft}
                    size={15}
                    style={{ paddingRight: "10px" }}
                  ></Icon>
                  Tiblake til kursoversikt
                </NavLink>
              </p>
              <Router history={history}>
                <div className={props.title}>
                  <h3>{props.navn}</h3>
                </div>

                {/* Accordion start */}
                <Accordion className="grid-center" title="Kapittel 1">
                  <div className="wtf"></div>

                  <ListItem
                    selected={selectedIndex === 0}
                    onClick={event => handleListItemClick(event, 0)}
                    button
                    component={Link}
                    to="/kurs/lesson/000"
                  >
                    <p className="lesson-btn">Fart</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={event => handleListItemClick(event, 1)}
                    component={Link}
                    to="/kurs/lesson/01"
                  >
                    <p className="lesson-btn">Quiz - Fart</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 2}
                    onClick={event => handleListItemClick(event, 2)}
                    button
                    component={Link}
                    to="/kurs/lesson/02"
                  >
                    <p className="lesson-btn">Vekt</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 4}
                    onClick={event => handleListItemClick(event, 4)}
                    component={Link}
                    to="/kurs/lesson/04"
                  >
                    <p className="lesson-btn">Quiz - Vekt</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                  </ListItem>
                </Accordion>
                {/* Accordion end */}

                {/* Accordion start */}
                <Accordion className="grid-center" title="Kapittel 2">
                  <p>Dette inneholder oppgaver for kapittel 1</p>
                  <Link to="/#">
                    <button className="quiz-btn">Start kurs</button>
                  </Link>
                </Accordion>

                {/* Dynamic routing*/}
              </Router>
            </div>
            <div className="lesson-container">
              <Router history={history}>
                <Route exact path="/kurs/lesson/020" component={Lesson1} />
                <Route exact path="/kurs/lesson/21" component={Lesson2} />
                <Route exact path="/kurs/lesson/22" component={Lesson3} />
                <Route exact path="/kurs/lesson/23" component={Lesson4} />
              </Router>
            </div>
          </div>
        </Body>
      </div>
    </div>
  );
};

export default Routes;

const Body = styled.div`
  padding: 0;
  margin: 0;
  background-color: #f8f9fa;

  .overall-container {
    padding: 50px 50px;
    display: grid;
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

    .lesson-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0px 0px 10px 3px rgba(27, 202, 255, 0.05);
      position: relative;
      overflow: hidden;
      max-width: 100%;
      min-height: 720px;
    }

    .course-link {
      text-decoration: none;
      font-size: 14px;
      color: var(--main-dark-gray);
      
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


    .wtf {
      padding-bottom: 15px;
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
`;

import React from "react";
import { Router, Route, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";

// Import the lessons
import Kap1Qs from "./quiz/kap1s";
import Kap2s from "./video/kap2s";

import styled from "styled-components";
import "../../../css/Quiz.css";
import Accordion from "../accordion";

import ListItem from "@material-ui/core/ListItem";

// Icon
import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { desktop } from "react-icons-kit/fa/desktop";
import { pencil } from "react-icons-kit/fa/pencil";
import { toggleLeft } from "react-icons-kit/fa/toggleLeft";

import { Kurs1 as Course } from "../../../modules/api/courseData/courseInfo";

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
              <p className="course-link flexContent">
                <NavLink className="course-link" to={Course.lesson}>
                  <Icon
                    icon={chevronLeft}
                    size={15}
                    style={{ paddingRight: "10px" }}
                  ></Icon>
                  Tiblake til kursoversikt
                </NavLink>
                <Icon icon={toggleLeft} size={"25px"}></Icon>
              </p>
              <Router history={history}>
                <div className={Course.title}>
                  <h3>{Course.navn}</h3>
                </div>

                {/* Accordion start */}
                <Accordion className="grid-center" title={Course.kap1}>
                  <div className="wtf"></div>

                  <ListItem
                    selected={selectedIndex === 0}
                    onClick={event => handleListItemClick(event, 0)}
                    button
                    component={Link}
                    to="/kurs/lesson/110"
                  >
                    <p className="lesson-btn">{Course.kap1s}</p>

                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap1Ts}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={event => handleListItemClick(event, 1)}
                    component={Link}
                    to="/kurs/lesson/21s"
                  >
                    <p className="lesson-btn regular"> {Course.kap1s}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap1Qs}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 2}
                    onClick={event => handleListItemClick(event, 2)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap1s1}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap1Ts1}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={event => handleListItemClick(event, 3)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap1s1}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap1Qs1}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 4}
                    onClick={event => handleListItemClick(event, 4)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap1s2}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap1Ts2}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 5}
                    onClick={event => handleListItemClick(event, 5)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap1s2}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap1Qs2}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 6}
                    onClick={event => handleListItemClick(event, 6)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap1s3}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap1Ts3}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 7}
                    onClick={event => handleListItemClick(event, 7)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap1s3}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap1Qs3}
                    </p>
                  </ListItem>
                </Accordion>
                {/* Accordion end */}

                {/* Accordion start */}
                <Accordion className="grid-center" title={Course.kap2}>
                  <div className="wtf"></div>

                  <ListItem
                    selected={selectedIndex === 8}
                    onClick={event => handleListItemClick(event, 8)}
                    button
                    component={Link}
                    to="/kurs/lesson/21s"
                  >
                    <p className="lesson-btn">{Course.kap2s}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap2Ts}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 9}
                    onClick={event => handleListItemClick(event, 9)}
                    component={Link}
                    to="/kurs/lesson/11"
                  >
                    <p className="lesson-btn regular"> {Course.kap2s}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap2Qs}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 10}
                    onClick={event => handleListItemClick(event, 10)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap2s1}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap2Ts1}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 11}
                    onClick={event => handleListItemClick(event, 11)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap2s1}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap2Qs1}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 12}
                    onClick={event => handleListItemClick(event, 12)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap2s2}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap2Ts2}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 13}
                    onClick={event => handleListItemClick(event, 13)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap2s2}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap2Qs2}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 14}
                    onClick={event => handleListItemClick(event, 14)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap2s3}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap2Ts3}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 15}
                    onClick={event => handleListItemClick(event, 15)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap2s3}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap2Qs3}
                    </p>
                  </ListItem>
                </Accordion>
                {/* ACCORDION END */}

                {/* ACCORDION START */}

                <Accordion className="grid-center" title={Course.kap3}>
                  <div className="wtf"></div>

                  <ListItem
                    selected={selectedIndex === 16}
                    onClick={event => handleListItemClick(event, 16)}
                    button
                    component={Link}
                    to="/kurs/lesson/110"
                  >
                    <p className="lesson-btn">{Course.kap3s}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap3Ts}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 17}
                    onClick={event => handleListItemClick(event, 17)}
                    component={Link}
                    to="/kurs/lesson/11"
                  >
                    <p className="lesson-btn regular"> {Course.kap3s}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap3Qs}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 18}
                    onClick={event => handleListItemClick(event, 18)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap3s1}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>{" "}
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap3Ts1}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 19}
                    onClick={event => handleListItemClick(event, 19)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap3s1}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap3Qs1}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 20}
                    onClick={event => handleListItemClick(event, 20)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap3s2}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap3Ts2}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 21}
                    onClick={event => handleListItemClick(event, 21)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap3s2}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap3Qs2}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 22}
                    onClick={event => handleListItemClick(event, 22)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap3s3}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap3Ts3}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 23}
                    onClick={event => handleListItemClick(event, 23)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap3s3}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap3Qs3}
                    </p>
                  </ListItem>
                </Accordion>
                {/* ACCORDION END */}

                {/* ACCORDION START */}

                <Accordion className="grid-center" title={Course.kap4}>
                  <div className="wtf"></div>

                  <ListItem
                    selected={selectedIndex === 24}
                    onClick={event => handleListItemClick(event, 24)}
                    button
                    component={Link}
                    to="/kurs/lesson/110"
                  >
                    <p className="lesson-btn">{Course.kap4s}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap4Ts}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 25}
                    onClick={event => handleListItemClick(event, 25)}
                    component={Link}
                    to="/kurs/lesson/11"
                  >
                    <p className="lesson-btn regular"> {Course.kap4s}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap4Qs}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 26}
                    onClick={event => handleListItemClick(event, 26)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap4s1}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap4Ts1}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 27}
                    onClick={event => handleListItemClick(event, 27)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap4s1}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap4Qs1}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 28}
                    onClick={event => handleListItemClick(event, 28)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap4s2}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap4Ts2}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 29}
                    onClick={event => handleListItemClick(event, 29)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap4s2}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap4Qs2}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 30}
                    onClick={event => handleListItemClick(event, 30)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap4s3}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap4Ts3}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 31}
                    onClick={event => handleListItemClick(event, 31)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap4s3}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap4Qs3}
                    </p>
                  </ListItem>
                </Accordion>
                {/* ACCORDION END */}

                {/* ACCORDION START */}

                <Accordion className="grid-center" title={Course.kap5}>
                  <div className="wtf"></div>

                  <ListItem
                    selected={selectedIndex === 32}
                    onClick={event => handleListItemClick(event, 32)}
                    button
                    component={Link}
                    to="/kurs/lesson/110"
                  >
                    <p className="lesson-btn">{Course.kap5s}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap5Ts}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 33}
                    onClick={event => handleListItemClick(event, 33)}
                    component={Link}
                    to="/kurs/lesson/11"
                  >
                    <p className="lesson-btn regular"> {Course.kap5s}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap5Qs}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 34}
                    onClick={event => handleListItemClick(event, 34)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap4s1}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap5Ts1}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 35}
                    onClick={event => handleListItemClick(event, 35)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap5s1}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap4Qs1}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 36}
                    onClick={event => handleListItemClick(event, 36)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap5s2}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap5Ts2}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 36}
                    onClick={event => handleListItemClick(event, 36)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap5s2}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap5Qs2}
                    </p>
                  </ListItem>

                  <ListItem
                    selected={selectedIndex === 38}
                    onClick={event => handleListItemClick(event, 38)}
                    button
                    component={Link}
                    to="/kurs/lesson/12"
                  >
                    <p className="lesson-btn">{Course.kap5s3}</p>
                    <Icon
                      icon={desktop}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap5Ts3}
                    </p>
                  </ListItem>

                  <ListItem
                    button
                    selected={selectedIndex === 39}
                    onClick={event => handleListItemClick(event, 39)}
                    component={Link}
                    to="/kurs/lesson/13"
                  >
                    <p className="lesson-btn regular"> {Course.kap5s3}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.kap5Qs3}
                    </p>
                  </ListItem>
                </Accordion>
                {/* ACCORDION END */}

                {/* ACCORDION START */}

                <Accordion className="grid-center" title={Course.test}>
                  <div className="wtf"></div>

                  <ListItem
                    selected={selectedIndex === 32}
                    onClick={event => handleListItemClick(event, 32)}
                    button
                    component={Link}
                    to="/kurs/lesson/110"
                  >
                    <p className="lesson-btn">{Course.test}</p>
                    <Icon
                      icon={pencil}
                      size={15}
                      style={{ paddingLeft: "75%", position: "absolute" }}
                    ></Icon>
                    <p
                      className="courseInfo"
                      style={{
                        marginTop: "1%",
                        paddingLeft: "81%",
                        position: "absolute"
                      }}
                    >
                      {Course.testQ}
                    </p>
                  </ListItem>
                </Accordion>
                {/* ACCORDION END */}

                {/* Dynamic routing*/}
              </Router>
            </div>
            <div className="lesson-container">
              <Router history={history}>
                <Route exact path="/kurs/lesson/110" component={null} />
                <Route exact path="/kurs/lesson/11" component={Kap1Qs} />
                <Route exact path="/kurs/lesson/21s" component={Kap2s} />
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
      border-radius: 0 0 10px 10px;
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

    .flexContent {
      display: flex;
      justify-content: space-between;
    }


    .courseInfo {
      font-size: 13px;
    }
`;

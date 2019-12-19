import React from "react";
import { Link } from "react-router-dom";

// Icon
import { Icon } from "react-icons-kit";
import { desktop } from "react-icons-kit/fa/desktop";
import { pencil } from "react-icons-kit/fa/pencil";

import "../../../css/Quiz.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ListItem from "@material-ui/core/ListItem";

import MenuProgress from "../progressBar/menuProgress";
import { Kurs0Nav as Nav } from "../../../modules/api/courseData/courseNavigation";

const Routes = props => {
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Accordion.Toggle
        as={Card.Header}
        className="grid-center title"
        eventKey="0"
      >
        <div className="flex fullWidth">
          <h5 className="bold">{props.kap1}</h5>

          <div className="half-width" style={{ marginTop: "3%" }}>
            <MenuProgress />
          </div>
        </div>
        <div className="divider-3"></div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body className="nomargin">
          <ListItem
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
            button
            component={Link}
            to={Nav.kap1s}
          >
            <p className="lesson-btn">{props.kap1s}</p>

            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap1Ts}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
            button
            component={Link}
            to={Nav.kap1sQuiz}
          >
            <p className="lesson-btn regular"> {props.kap1s}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap1Qs}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
            button
            component={Link}
            to={Nav.kap1s1}
          >
            <p className="lesson-btn">{props.kap1s1}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap1Ts1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
            button
            component={Link}
            to={Nav.kap1s1Quiz}
          >
            <p className="lesson-btn regular"> {props.kap1s1}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap1Qs1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 4}
            onClick={event => handleListItemClick(event, 4)}
            button
            component={Link}
            to={Nav.kap1s2}
          >
            <p className="lesson-btn">{props.kap1s2}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap1Ts2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 5}
            onClick={event => handleListItemClick(event, 5)}
            button
            component={Link}
            to={Nav.kap1s2Quiz}
          >
            <p className="lesson-btn regular"> {props.kap1s2}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap1Qs2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 6}
            onClick={event => handleListItemClick(event, 6)}
            button
            component={Link}
            to={Nav.kap1s3}
          >
            <p className="lesson-btn">{props.kap1s3}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap1Ts3}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 7}
            onClick={event => handleListItemClick(event, 7)}
            button
            component={Link}
            to={Nav.kap1s3Quiz}
          >
            <p className="lesson-btn regular"> {props.kap1s3}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap1Qs3}
            </p>
          </ListItem>
          <div className="divider-3"></div>
        </Card.Body>
      </Accordion.Collapse>

      {/* SECOND ACCORDION*/}
      <Accordion.Toggle
        as={Card.Header}
        className="grid-center title "
        eventKey="1"
      >
        <div className="flex fullWidth">
          <h5 className="bold">{props.kap2}</h5>

          <div className="half-width" style={{ marginTop: "3%" }}>
            <MenuProgress />
          </div>
        </div>
        <div className="divider-3"></div>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="1">
        <Card.Body className="nomargin">
          <ListItem
            selected={selectedIndex === 8}
            onClick={event => handleListItemClick(event, 8)}
            button
            component={Link}
            to={Nav.kap2s}
          >
            <p className="lesson-btn">{props.kap2s}</p>

            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap2Ts}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 9}
            onClick={event => handleListItemClick(event, 9)}
            button
            component={Link}
            to={Nav.kap2sQuiz}
          >
            <p className="lesson-btn regular"> {props.kap2s}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap2Qs}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 10}
            onClick={event => handleListItemClick(event, 10)}
            button
            component={Link}
            to={Nav.kap2s1}
          >
            <p className="lesson-btn">{props.kap2s1}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap2Ts1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 11}
            onClick={event => handleListItemClick(event, 11)}
            button
            component={Link}
            to={Nav.kap2s1Quiz}
          >
            <p className="lesson-btn regular"> {props.kap2s1}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap2Qs1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 12}
            onClick={event => handleListItemClick(event, 12)}
            button
            component={Link}
            to={Nav.kap2s2}
          >
            <p className="lesson-btn">{props.kap2s2}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap2Ts2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 13}
            onClick={event => handleListItemClick(event, 13)}
            button
            component={Link}
            to={Nav.kap2s2Quiz}
          >
            <p className="lesson-btn regular"> {props.kap2s2}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap2Qs2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 14}
            onClick={event => handleListItemClick(event, 14)}
            button
            component={Link}
            to={Nav.kap2s3}
          >
            <p className="lesson-btn">{props.kap2s3}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap2Ts3}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 15}
            onClick={event => handleListItemClick(event, 15)}
            button
            component={Link}
            to={Nav.kap2s3Quiz}
          >
            <p className="lesson-btn regular"> {props.kap2s3}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap2Qs3}
            </p>
          </ListItem>
          <div className="divider-3"></div>
        </Card.Body>
      </Accordion.Collapse>

      {/* THIRD ACCORDION */}
      <Accordion.Toggle
        as={Card.Header}
        className="grid-center title "
        eventKey="2"
      >
        <div className="flex fullWidth">
          <h5 className="bold">{props.kap3}</h5>

          <div className="half-width" style={{ marginTop: "3%" }}>
            <MenuProgress />
          </div>
        </div>
        <div className="divider-3"></div>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="2">
        <Card.Body className="nomargin">
          <ListItem
            selected={selectedIndex === 16}
            onClick={event => handleListItemClick(event, 16)}
            button
            component={Link}
            to={Nav.kap3s}
          >
            <p className="lesson-btn">{props.kap3s}</p>

            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap3Ts}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 17}
            onClick={event => handleListItemClick(event, 17)}
            button
            component={Link}
            to={Nav.kap3sQuiz}
          >
            <p className="lesson-btn regular"> {props.kap3s}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap3Qs}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 18}
            onClick={event => handleListItemClick(event, 18)}
            button
            component={Link}
            to={Nav.kap3s1}
          >
            <p className="lesson-btn">{props.kap3s1}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap3Ts1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 19}
            onClick={event => handleListItemClick(event, 19)}
            button
            component={Link}
            to={Nav.kap3s1Quiz}
          >
            <p className="lesson-btn regular"> {props.kap3s1}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap3Qs1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 20}
            onClick={event => handleListItemClick(event, 20)}
            button
            component={Link}
            to={Nav.kap3s2}
          >
            <p className="lesson-btn">{props.kap3s2}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap3Ts2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 21}
            onClick={event => handleListItemClick(event, 21)}
            button
            component={Link}
            to={Nav.kap3s2Quiz}
          >
            <p className="lesson-btn regular"> {props.kap3s2}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap3Qs2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 22}
            onClick={event => handleListItemClick(event, 22)}
            button
            component={Link}
            to={Nav.kap3s3}
          >
            <p className="lesson-btn">{props.kap3s3}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap3Ts3}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 23}
            onClick={event => handleListItemClick(event, 23)}
            button
            component={Link}
            to={Nav.kap3s3Quiz}
          >
            <p className="lesson-btn regular"> {props.kap3s3}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap3Qs3}
            </p>
          </ListItem>
          <div className="divider-3"></div>
        </Card.Body>
      </Accordion.Collapse>

      {/* FOURTH ACCORDION */}

      <Accordion.Toggle
        as={Card.Header}
        className="grid-center title "
        eventKey="3"
      >
        <div className="flex fullWidth">
          <h5 className="bold">{props.kap4}</h5>

          <div className="half-width" style={{ marginTop: "3%" }}>
            <MenuProgress />
          </div>
        </div>
        <div className="divider-3"></div>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="3">
        <Card.Body className="nomargin">
          <ListItem
            selected={selectedIndex === 24}
            onClick={event => handleListItemClick(event, 24)}
            button
            component={Link}
            to={Nav.kap4s}
          >
            <p className="lesson-btn">{props.kap4s}</p>

            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap4Ts}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 25}
            onClick={event => handleListItemClick(event, 25)}
            button
            component={Link}
            to={Nav.kap4sQuiz}
          >
            <p className="lesson-btn regular"> {props.kap4s}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap4Qs}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 26}
            onClick={event => handleListItemClick(event, 26)}
            button
            component={Link}
            to={Nav.kap4s1}
          >
            <p className="lesson-btn">{props.kap4s1}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap4Ts1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 27}
            onClick={event => handleListItemClick(event, 27)}
            button
            component={Link}
            to={Nav.kap4sQuiz}
          >
            <p className="lesson-btn regular"> {props.kap4s1}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap4Qs1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 28}
            onClick={event => handleListItemClick(event, 28)}
            button
            component={Link}
            to={Nav.kap4s2}
          >
            <p className="lesson-btn">{props.kap4s2}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap4Ts2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 29}
            onClick={event => handleListItemClick(event, 29)}
            button
            component={Link}
            to={Nav.kap4s2Quiz}
          >
            <p className="lesson-btn regular"> {props.kap4s2}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap4Qs2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 30}
            onClick={event => handleListItemClick(event, 30)}
            button
            component={Link}
            to={Nav.kap4s3}
          >
            <p className="lesson-btn">{props.kap4s3}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap4Ts3}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 31}
            onClick={event => handleListItemClick(event, 31)}
            button
            component={Link}
            to={Nav.kap4s3Quiz}
          >
            <p className="lesson-btn regular"> {props.kap4s3}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap4Qs3}
            </p>
          </ListItem>
          <div className="divider-3"></div>
        </Card.Body>
      </Accordion.Collapse>

      {/* FITH ACCORDION */}

      <Accordion.Toggle
        as={Card.Header}
        className="grid-center title "
        eventKey="4"
      >
        <div className="flex fullWidth">
          <h5 className="bold">{props.kap5}</h5>

          <div className="half-width" style={{ marginTop: "3%" }}>
            <MenuProgress />
          </div>
        </div>
        <div className="divider-3"></div>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="4">
        <Card.Body className="nomargin">
          <ListItem
            selected={selectedIndex === 32}
            onClick={event => handleListItemClick(event, 32)}
            button
            component={Link}
            to={Nav.kap5s}
          >
            <p className="lesson-btn">{props.kap5s}</p>

            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap5Ts}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 33}
            onClick={event => handleListItemClick(event, 33)}
            button
            component={Link}
            to={Nav.kap5sQuiz}
          >
            <p className="lesson-btn regular"> {props.kap5s}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap5Qs}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 34}
            onClick={event => handleListItemClick(event, 34)}
            button
            component={Link}
            to={Nav.kap5s1}
          >
            <p className="lesson-btn">{props.kap5s1}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap5Ts1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 36}
            onClick={event => handleListItemClick(event, 36)}
            button
            component={Link}
            to={Nav.kap5s1Quiz}
          >
            <p className="lesson-btn regular"> {props.kap5s1}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap5Qs1}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 37}
            onClick={event => handleListItemClick(event, 37)}
            button
            component={Link}
            to={Nav.kap5s2}
          >
            <p className="lesson-btn">{props.kap5s2}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap5Ts2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 38}
            onClick={event => handleListItemClick(event, 38)}
            button
            component={Link}
            to={Nav.kap5s2Quiz}
          >
            <p className="lesson-btn regular"> {props.kap5s2}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap5Qs2}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 39}
            onClick={event => handleListItemClick(event, 39)}
            button
            component={Link}
            to={Nav.kap5s3}
          >
            <p className="lesson-btn">{props.kap5s3}</p>
            <Icon
              icon={desktop}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap5Ts3}
            </p>
          </ListItem>
          <div className="divider-3"></div>

          <ListItem
            selected={selectedIndex === 40}
            onClick={event => handleListItemClick(event, 40)}
            button
            component={Link}
            to={Nav.kap5s3Quiz}
          >
            <p className="lesson-btn regular"> {props.kap5s3}</p>
            <Icon
              icon={pencil}
              size={15}
              style={{ paddingLeft: "75%", position: "absolute" }}
            ></Icon>
            <p
              className="propsInfo"
              style={{
                marginTop: "1%",
                paddingLeft: "81%",
                position: "absolute"
              }}
            >
              {props.kap5Qs3}
            </p>
          </ListItem>
          <div className="divider-3"></div>
        </Card.Body>
      </Accordion.Collapse>
    </div>
  );
};

export default Routes;

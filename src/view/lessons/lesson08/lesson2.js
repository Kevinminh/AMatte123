import React, { Component } from "react";
import styled from "styled-components";
import Quiz from "./quiz01";
import "../../../css/Quiz.css";

class lessonFirst extends Component {
  state = {
    selectedCardType: ""
  };

  render() {
    console.log(this.props);
    return (
      <Body>
        <div className="lesson-container">
          <Quiz />
        </div>
      </Body>
    );
  }
}

export default lessonFirst;

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
      min-height: 480px;
    }

    .course-link {
      text-decoration: none;
      font-size: 14px;
      color: var(--main-dark-gray);
      
    }

    h3 {
      color: var(--main-dark-blue);
      text-align: center;
      padding-bottom: 7px;
      font-weight: bold;
    }

    .grid-center {
      display: grid;
      grid-template-columns: 1fr;

    }


    .wtf {
      padding-bottom: 15px;
    }
`;

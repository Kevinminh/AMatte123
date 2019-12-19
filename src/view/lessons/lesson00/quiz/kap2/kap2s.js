import React, { Component } from "react";
import Index from "../index";
import "../../../../../css/Quiz.css";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseInfo";

class QuizKap1s extends Component {
  state = {
    selectedCardType: ""
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="lesson-container">
          <Index title={Course.kap2s} />
        </div>
      </div>
    );
  }
}

export default QuizKap1s;

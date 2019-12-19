import React, { Component } from "react";
import Lesson from "./lessonIndex";

// import course
import { Kurs1 as Course } from "../../../modules/api/courseData/courseInfo";

class lesson01 extends Component {
  render() {
    return (
      <div>
        <Lesson
          navn={Course.navn}
          lesson={Course.lesson}
          title={Course.title}
          kap1={Course.kap1}
          kap2={Course.kap2}
        />
      </div>
    );
  }
}

export default lesson01;

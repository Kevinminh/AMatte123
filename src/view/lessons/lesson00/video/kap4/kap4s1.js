import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap4s1}
          title={Course.titleKap4s1}
          length={Course.lengthKap4s1}
          difficulty={Course.difficultyKap4s1}
          nextBtn={Course.nextBtnKap4s1}
          nextItem={Course.nextItemKap4s1}
          prevBtn={Course.prevBtnKap4s1}
          prevBtnStyle={Course.preBtnStyleKap4s1}
        />
      </div>
    );
  }
}

export default Intro;

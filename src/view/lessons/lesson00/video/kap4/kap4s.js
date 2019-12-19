import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap4s}
          title={Course.titleKap4s}
          length={Course.lengthKap4s}
          difficulty={Course.difficultyKap4s}
          nextBtn={Course.nextBtnKap4s}
          nextItem={Course.nextItemKap4s}
          prevBtn={Course.prevBtnKap4s}
          prevBtnStyle={Course.preBtnStyleKap4s}
        />
      </div>
    );
  }
}

export default Intro;

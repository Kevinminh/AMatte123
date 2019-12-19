import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap4s2}
          title={Course.titleKap4s2}
          length={Course.lengthKap4s2}
          difficulty={Course.difficultyKap4s2}
          nextBtn={Course.nextBtnKap4s2}
          nextItem={Course.nextItemKap4s2}
          prevBtn={Course.prevBtnKap4s2}
          prevBtnStyle={Course.preBtnStyleKap4s2}
        />
      </div>
    );
  }
}

export default Intro;

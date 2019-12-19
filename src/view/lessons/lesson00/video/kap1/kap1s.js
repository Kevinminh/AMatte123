import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap1s}
          title={Course.titleKap1s}
          length={Course.lengthKap1s}
          difficulty={Course.difficultyKap1s}
          nextBtn={Course.nextBtnKap1s}
          nextItem={Course.nextItemKap1s}
          prevBtn={Course.prevBtnKap1s}
          prevBtnStyle={Course.preBtnStyleKap1s}
        />
      </div>
    );
  }
}

export default Intro;

import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap1s2}
          title={Course.titleKap1s2}
          length={Course.lengthKap1s2}
          difficulty={Course.difficultyKap1s2}
          nextBtn={Course.nextBtnKap1s2}
          nextItem={Course.nextItemKap1s2}
          prevBtn={Course.prevBtnKap1s2}
          prevBtnStyle={Course.preBtnStyleKap1s2}
        />
      </div>
    );
  }
}

export default Intro;

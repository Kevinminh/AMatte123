import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap1s1}
          title={Course.titleKap1s1}
          length={Course.lengthKap1s1}
          difficulty={Course.difficultyKap1s1}
          nextBtn={Course.nextBtnKap1s1}
          nextItem={Course.nextItemKap1s1}
          prevBtn={Course.prevBtnKap1s1}
          prevBtnStyle={Course.preBtnStyleKap1s1}
        />
      </div>
    );
  }
}

export default Intro;

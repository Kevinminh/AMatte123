import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap2s1}
          title={Course.titleKap2s1}
          length={Course.lengthKap2s1}
          difficulty={Course.difficultyKap2s1}
          nextBtn={Course.nextBtnKap2s1}
          nextItem={Course.nextItemKap2s1}
          prevBtn={Course.prevBtnKap2s1}
          prevBtnStyle={Course.preBtnStyleKap2s1}
        />
      </div>
    );
  }
}

export default Intro;

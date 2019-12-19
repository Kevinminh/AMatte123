import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap2s2}
          title={Course.titleKap2s2}
          length={Course.lengthKap2s2}
          difficulty={Course.difficultyKap2s2}
          nextBtn={Course.nextBtnKap2s2}
          nextItem={Course.nextItemKap2s2}
          prevBtn={Course.prevBtnKap2s2}
          prevBtnStyle={Course.preBtnStyleKap2s2}
        />
      </div>
    );
  }
}

export default Intro;

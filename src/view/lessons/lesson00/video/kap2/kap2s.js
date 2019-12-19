import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap2s}
          title={Course.titleKap2s}
          length={Course.lengthKap2s}
          difficulty={Course.difficultyKap2s}
          nextBtn={Course.nextBtnKap2s}
          nextItem={Course.nextItemKap2s}
          prevBtn={Course.prevBtnKap2s}
          prevBtnStyle={Course.preBtnStyleKap2s}
        />
      </div>
    );
  }
}

export default Intro;

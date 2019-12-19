import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap5s}
          title={Course.titleKap5s}
          length={Course.lengthKap5s}
          difficulty={Course.difficultyKap5s}
          nextBtn={Course.nextBtnKap5s}
          nextItem={Course.nextItemKap5s}
          prevBtn={Course.prevBtnKap5s}
          prevBtnStyle={Course.preBtnStyleKap5s}
        />
      </div>
    );
  }
}

export default Intro;

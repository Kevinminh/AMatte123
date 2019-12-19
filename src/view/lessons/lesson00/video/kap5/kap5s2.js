import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap5s2}
          title={Course.titleKap5s2}
          length={Course.lengthKap5s2}
          difficulty={Course.difficultyKap5s2}
          nextBtn={Course.nextBtnKap5s2}
          nextItem={Course.nextItemKap5s2}
          prevBtn={Course.prevBtnKap5s2}
          prevBtnStyle={Course.preBtnStyleKap5s2}
        />
      </div>
    );
  }
}

export default Intro;

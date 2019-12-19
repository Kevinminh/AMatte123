import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap5s1}
          title={Course.titleKap5s1}
          length={Course.lengthKap5s1}
          difficulty={Course.difficultyKap5s1}
          nextBtn={Course.nextBtnKap5s1}
          nextItem={Course.nextItemKap5s1}
          prevBtn={Course.prevBtnKap5s1}
          prevBtnStyle={Course.preBtnStyleKap5s1}
        />
      </div>
    );
  }
}

export default Intro;

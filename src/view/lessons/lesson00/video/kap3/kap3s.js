import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap3s}
          title={Course.titleKap3s}
          length={Course.lengthKap3s}
          difficulty={Course.difficultyKap3s}
          nextBtn={Course.nextBtnKap3s}
          nextItem={Course.nextItemKap3s}
          prevBtn={Course.prevBtnKap3s}
          prevBtnStyle={Course.preBtnStyleKap3s}
        />
      </div>
    );
  }
}

export default Intro;

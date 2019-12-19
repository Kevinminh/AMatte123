import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap3s2}
          title={Course.titleKap3s2}
          length={Course.lengthKap3s2}
          difficulty={Course.difficultyKap3s2}
          nextBtn={Course.nextBtnKap3s2}
          nextItem={Course.nextItemKap3s2}
          prevBtn={Course.prevBtnKap3s2}
          prevBtnStyle={Course.preBtnStyleKap3s2}
        />
      </div>
    );
  }
}

export default Intro;

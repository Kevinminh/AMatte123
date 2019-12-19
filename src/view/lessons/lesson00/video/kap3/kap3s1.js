import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap3s1}
          title={Course.titleKap3s1}
          length={Course.lengthKap3s1}
          difficulty={Course.difficultyKap3s1}
          nextBtn={Course.nextBtnKap3s1}
          nextItem={Course.nextItemKap3s1}
          prevBtn={Course.prevBtnKap3s1}
          prevBtnStyle={Course.preBtnStyleKap3s1}
        />
      </div>
    );
  }
}

export default Intro;

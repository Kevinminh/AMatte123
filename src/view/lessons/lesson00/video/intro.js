import React, { Component } from "react";
import Index from "./index";
import { Kurs0 as Course } from "../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          prevBtnStyle={Course.noDisplay}
          vid={Course.vidIntro}
          title={Course.titleIntro}
          length={Course.lengthIntro}
          difficulty={Course.difficultyIntro}
          nextBtn={Course.nextBtnIntro}
          nextItem={Course.nextItemIntro}
          prevBtn=""
        />
      </div>
    );
  }
}

export default Intro;

import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap4s3}
          title={Course.titleKap4s3}
          length={Course.lengthKap4s3}
          difficulty={Course.difficultyKap4s3}
          nextBtn={Course.nextBtnKap4s3}
          nextItem={Course.nextItemKap4s3}
          prevBtn={Course.prevBtnKap4s3}
          prevBtnStyle={Course.preBtnStyleKap4s3}
        />
      </div>
    );
  }
}

export default Intro;

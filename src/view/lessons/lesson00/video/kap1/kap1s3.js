import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap1s3}
          title={Course.titleKap1s3}
          length={Course.lengthKap1s3}
          difficulty={Course.difficultyKap1s3}
          nextBtn={Course.nextBtnKap1s3}
          nextItem={Course.nextItemKap1s3}
          prevBtn={Course.prevBtnKap1s3}
          prevBtnStyle={Course.preBtnStyleKap1s3}
        />
      </div>
    );
  }
}

export default Intro;

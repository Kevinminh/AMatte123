import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap2s3}
          title={Course.titleKap2s3}
          length={Course.lengthKap2s3}
          difficulty={Course.difficultyKap2s3}
          nextBtn={Course.nextBtnKap2s3}
          nextItem={Course.nextItemKap2s3}
          prevBtn={Course.prevBtnKap2s3}
          prevBtnStyle={Course.preBtnStyleKap2s3}
        />
      </div>
    );
  }
}

export default Intro;

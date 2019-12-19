import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap5s3}
          title={Course.titleKap5s3}
          length={Course.lengthKap5s3}
          difficulty={Course.difficultyKap5s3}
          nextBtn={Course.nextBtnKap5s3}
          nextItem={Course.nextItemKap5s3}
          prevBtn={Course.prevBtnKap5s3}
          prevBtnStyle={Course.preBtnStyleKap5s3}
        />
      </div>
    );
  }
}

export default Intro;

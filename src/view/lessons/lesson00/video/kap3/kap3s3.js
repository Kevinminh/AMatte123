import React, { Component } from "react";
import Index from "../index";
import { Kurs0 as Course } from "../../../../../modules/api/courseData/courseVideoApi";

class Intro extends Component {
  render() {
    return (
      <div className="full-width">
        <Index
          vid={Course.vidKap3s3}
          title={Course.titleKap3s3}
          length={Course.lengthKap3s3}
          difficulty={Course.difficultyKap3s3}
          nextBtn={Course.nextBtnKap3s3}
          nextItem={Course.nextItemKap3s3}
          prevBtn={Course.prevBtnKap3s3}
          prevBtnStyle={Course.preBtnStyleKap3s3}
        />
      </div>
    );
  }
}

export default Intro;

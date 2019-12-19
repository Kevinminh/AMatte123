import React, { Component } from "react";
import OverView from "../../authorizedPages/courseOverview";
import { Kurs2 as Course } from "../../../modules/api/courseData/courseInfo";

import { Kurs2Nav as Nav } from "../../../modules/api/courseData/courseNavigation";
class courseOverview1 extends Component {
  render() {
    return (
      <div>
        <OverView
          tid={Course.tid}
          navn={Course.navn}
          oppgaver={Course.oppgaver}
          enroll={Nav.enroll}
          button={Course.button}
          title={Course.title}
          style4={Course.style}
          style5={Course.style}
          style6={Course.style}
        />
      </div>
    );
  }
}

export default courseOverview1;

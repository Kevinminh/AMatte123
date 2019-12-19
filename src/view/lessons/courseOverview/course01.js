import React, { Component } from "react";
import OverView from "../../authorizedPages/courseOverview";
import { Kurs1 as Course } from "../../../modules/api/courseData/courseInfo";

import { Kurs1Nav as Nav } from "../../../modules/api/courseData/courseNavigation";

class CourseOverview extends Component {
  render() {
    return (
      <div>
        {/* In order to hide rows -- use course.styleX(4--x)*/}
        <OverView
          tid={Course.tid}
          navn={Course.navn}
          oppgaver={Course.oppgaver}
          enroll={Nav.enroll}
          button={Course.button}
          title={Course.title}
          // KAP 1
          kap1={Course.kap1}
          kap1L={Course.kap1L}
          kap1Q={Course.kap1Q}
          kap1s={Course.kap1s}
          kap1sNav={Nav.kap1s}
          kap1Ls={Course.kap1Ls}
          kap1Qs={Course.kap1Qs}
          kap1s1={Course.kap1s1}
          kap1Ls1={Course.kap1Ls1}
          kap1Qs1={Course.kap1Qs1}
          kap1s2={Course.kap1s2}
          kap1Ls2={Course.kap1Ls2}
          kap1Qs2={Course.kap1Qs2}
          kap1s3={Course.kap1s3}
          kap1Ls3={Course.kap1Ls3}
          kap1Qs3={Course.kap1Qs3}
          row1s4={Course.style}
          // KAP 2
          kap2={Course.kap2}
          kap2L={Course.kap2L}
          kap2Q={Course.kap2Q}
          kap2s={Course.kap2s}
          kap2Ls={Course.kap2Ls}
          kap2Qs={Course.kap2Qs}
          kap2s1={Course.kap2s1}
          kap2Ls1={Course.kap2Ls1}
          kap2Qs1={Course.kap2Qs1}
          kap2s2={Course.kap2s2}
          kap2Ls2={Course.kap2Ls2}
          kap2Qs2={Course.kap2Qs2}
          kap2s3={Course.kap2s3}
          kap2Ls3={Course.kap2Ls3}
          kap2Qs3={Course.kap2Qs3}
          // KAP 3
          kap3={Course.kap3}
          kap3L={Course.kap3L}
          kap3Q={Course.kap3Q}
          kap3s={Course.kap3s}
          kap3Ls={Course.kap3Ls}
          kap3Qs={Course.kap3Qs}
          kap3s1={Course.kap3s1}
          kap3Ls1={Course.kap3Ls1}
          kap3Qs1={Course.kap3Qs1}
          kap3s2={Course.kap3s2}
          kap3Ls2={Course.kap3Ls2}
          kap3Qs2={Course.kap3Qs2}
          kap3s3={Course.kap3s3}
          kap3Ls3={Course.kap3Ls3}
          kap3Qs3={Course.kap3Qs3}
          // KAP 4
          kap4={Course.kap4}
          kap4L={Course.kap4L}
          kap4Q={Course.kap4Q}
          kap4s={Course.kap4s}
          kap4Ls={Course.kap4Ls}
          kap4Qs={Course.kap4Qs}
          kap4s1={Course.kap4s1}
          kap4Ls1={Course.kap4Ls1}
          kap4Qs1={Course.kap4Qs1}
          kap4s2={Course.kap4s2}
          kap4Ls2={Course.kap4Ls2}
          kap4Qs2={Course.kap4Qs2}
          kap4s3={Course.kap4s3}
          kap4Ls3={Course.kap4Ls3}
          kap4Qs3={Course.kap4Qs3}
          // KAP 5
          kap5={Course.kap5}
          kap5L={Course.kap5L}
          kap5Q={Course.kap5Q}
          kap5s={Course.kap5s}
          kap5Ls={Course.kap5Ls}
          kap5Qs={Course.kap5Qs}
          kap5s1={Course.kap5s1}
          kap5Ls1={Course.kap5Ls1}
          kap5Qs1={Course.kap5Qs1}
          kap5s2={Course.kap5s2}
          kap5Ls2={Course.kap5Ls2}
          kap5Qs2={Course.kap5Qs2}
          kap5s3={Course.kap5s3}
          kap5Ls3={Course.kap5Ls3}
          kap5Qs3={Course.kap5Qs3}
          //HIDING
          row1s5={Course.style}
          row5={Course.style}
          row6={Course.style}
          row7={Course.style}
          // TEST
          test={Course.test}
          testL={Course.testL}
          testQ={Course.testQ}
        />
      </div>
    );
  }
}

export default CourseOverview;

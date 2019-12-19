import React, { Component } from "react";
import AvailableCourses from "./userCourses";
import LoggedInFooter from "../Navigation/loggedInFooter";

class CourseApp extends Component {
  render() {
    return (
      <div>
        <AvailableCourses></AvailableCourses>
        <LoggedInFooter></LoggedInFooter>
      </div>
    );
  }
}

export default CourseApp;

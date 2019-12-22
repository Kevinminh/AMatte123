import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";

import { desktop } from "react-icons-kit/fa/desktop";
import { pencil } from "react-icons-kit/fa/pencil";

import "../../css/CourseCards.css";

import courseList from "../../modules/api/courseData/courses.json";

class userCoursesComponent extends Component {
  state = {
    search: ""
  };

  renderCourse = course => {
    return (
      <div key={course.code} className="AC-card-container">
        <div className={course.top}>
          <h3>{course.name}</h3>
          <div className="AC-icon-container">
            <span className="AC-icon">
              <Icon
                style={{ paddingRight: "7px" }}
                icon={desktop}
                size={15}
                aria-hidden="true"
              />
              {course.time}
            </span>
            <span className="AC-icon">
              <Icon
                icon={pencil}
                size={15}
                aria-hidden="true"
                style={{ paddingRight: "7px" }}
              />
              {course.quiz}
            </span>
          </div>
        </div>
        <div className="AV-bottom">
          <Link to={course.overview} className="AV-course-btn">
            Kursoversikt
          </Link>
          <Link to={course.start} className={course.button}>
            Kom i gang
          </Link>
        </div>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCourses = courseList.filter(course => {
      return (
        course.name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
      );
    });

    return (
      <div className="">
        <div className="AV-mainContainer ">
          <h3>Søk etter andre kurser:</h3>
          <div className="AV-search-container">
            <p>Søk etter kurs</p>
            <p>Skoleår</p>
            <p>Kurskategori</p>
          </div>
          <div className="AV-item-search" style={{ paddingBottom: "15px" }}>
            <input
              type="text"
              onChange={this.onchange}
              placeholder="Søk.."
              id="userInput"
            />
            <select
              className="AV-school-year"
              name="AV-school-year"
              selected="Ingen"
              onChange={this.onchange}
            >
              <option value="">Ingen</option>
              <option value="16">1.Klasse - 7.Klasse</option>
              <option value="03">8.Klasse - 10.Klasse</option>
              <option value="04">1.Vgs - 3.Vgs</option>
              <option value="Uni/Høgskole">Uni/Høgskole</option>
            </select>

            <select
              className="AV-course-category"
              name="AV-course-category"
              selected="Ingen"
              onChange={this.onchange}
            >
              <option value="">Ingen</option>
              <option value="[1,2,3,4]">Grunnskole</option>
              <option value="12">Ungdomsskole</option>
              <option value="03">Videregående</option>
              <option value="04">Uni/Høgskole</option>
            </select>
          </div>
          <div className="divider-2"></div>
        </div>
        <div key={899} className="grid-column-3" style={{ padding: "0 50%" }}>
          {filteredCourses.map(course => {
            return this.renderCourse(course);
          })}
        </div>
      </div>
    );
  }
}

export default userCoursesComponent;

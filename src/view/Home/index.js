import React, { Component } from "react";
import Header from "./hero";
import Showcase from "./showcaseSection";
import TabComponent from "./TabsNav/tabComponent";
import FeaturesTab from "./featuresSection";
import Kurser from "./freeCoursesSection";
import AllKurser from "./allCoursesSection";
import QA from "./questionSection";
import Footer from "../Navigation/footer";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Showcase />
        <TabComponent />
        <FeaturesTab />
        <Kurser />
        <AllKurser />
        <QA />
        <Footer />
      </div>
    );
  }
}

export default Main;

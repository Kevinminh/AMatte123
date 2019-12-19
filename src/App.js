import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Firebase Auth
import ProtectedRoute from "./security/protectedRoute";
import { connect } from "react-redux";
import "firebase/auth";

// Pages
import "./css/App.css";
import Home from "../src/view/Home/index";
import Login from "../src/view/Login/index";
import About from "../src/view/AboutUs/index";
import Pricing from "../src/view/Pricing/index";
import MyAccount from "../src/view/MyAccount/index";
import CourseApp from "./view/MainApp/index";
import Resources from "../src/view/Resources/index";
import NotFound404 from "../src/view/404/index";

// Policy pages
import Terms from "../src/view/PolicyPages/terms";
import Privacy from "../src/view/PolicyPages/privacy";
import Cookies from "../src/view/PolicyPages/cookies";

// Course Overview
import OverViewC00 from "./view/lessons/courseOverview/course00";
import OverViewC01 from "./view/lessons/courseOverview/course01";
import OverViewC02 from "./view/lessons/courseOverview/course02";
import OverViewC08 from "./view/lessons/courseOverview/course08";
import OverViewC09 from "./view/lessons/courseOverview/course09";
import OverViewC10 from "./view/lessons/courseOverview/course10";

// LESSONS
import Lesson00 from "../src/view/lessons/lesson00/lessonIndex";
import Lesson01 from "../src/view/lessons/lesson01/index";
import Lesson02 from "../src/view/lessons/lesson02/index";
import Lesson08 from "../src/view/lessons/lesson08/index";

// Stripe
import MyStoreCheckout from "../src/view/Checkout/index";

// Components
import Navbar from "./view/Navigation/navBar";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />

        <Navbar />
      </Switch>
      <Switch>
        {/* COURSE OVERVIEW */}
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
          exact
          path="/kurs"
          component={CourseApp}
        />
        <ProtectedRoute
          exact
          path="/min-side"
          component={MyAccount}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        {/* ALL COURSES AND LESSONS */}
        <ProtectedRoute
          exact
          path="/kurs0/00"
          component={OverViewC00}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path="/kurs0/lesson/:id"
          component={Lesson00}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path="/kurs1/01"
          component={OverViewC01}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path="/kurs1/lesson/:id"
          component={Lesson01}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path="/kurs2/02"
          component={OverViewC02}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path="/kurs2/lesson/:id"
          component={Lesson02}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path="/kurs8/08"
          component={OverViewC08}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path="/kurs8/lesson/:id"
          component={Lesson08}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />

        <ProtectedRoute
          exact
          path="/kurs9/09"
          component={OverViewC09}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
          exact
          path="/kurs10/10"
          component={OverViewC10}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />

        {/* UNAUTHENTICATED ROUTES */}
        <Route exact path="/kurs" component={CourseApp} />
        <Route exact path="/Om-oss" component={About} />
        <Route exact path="/priser" component={Pricing} />
        <Route exact path="/min-side" component={MyAccount} />
        <Route exact path="/ressurser" component={Resources} />
        <Route exact path="/brukervilkar" component={Terms} />
        <Route exact path="/personvern" component={Privacy} />
        <Route exact path="/cookies" component={Cookies} />
        <Route exact path="/" component={Home} />
        <Route exact path="/stripe" component={MyStoreCheckout} />
        <Route component={NotFound404} />
      </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);

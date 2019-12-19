import React, { Component } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";
import { Icon } from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
class menuProgress extends Component {
  componentDidMount() {
    const user = localStorage.getItem("myValueInLocalStorage");
    this.setState({ user });
  }
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0,
      full: 100
    };

    this.nextStep = this.nextStep.bind(this);
  }

  nextStep = () => {
    if (this.state.percentage === 100) return;
    this.setState(prevState => ({ percentage: prevState.percentage + 100 }));
    localStorage.setItem("myValueInLocalStorage", this.state.percentage);
  };
  render() {
    return (
      <div>
        <div>
          <ProgressBar
            percentage={this.state.percentage}
            now={this.state.percentage}
            label={`${this.state.percentage}`}
          />
        </div>
        <button
          style={{ marginLeft: "5%", marginTop: "-1.5%", position: "absolute" }}
          className="progress-btn"
          onClick={this.nextStep}
        >
          <Icon icon={check} size={"15px"} />
        </button>
      </div>
    );
  }
}

export default menuProgress;

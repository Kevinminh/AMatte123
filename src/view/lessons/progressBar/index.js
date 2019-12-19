import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class progressBar extends Component {
  clamp = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  };

  render() {
    return (
      <Track>
        <Thumb percentage={this.clamp(0, this.props.percentage, 100)} />
      </Track>
    );
  }
}

progressBar.propTypes = {
  percentage: PropTypes.number
};

export default progressBar;

const Track = styled.div`
  width: 910px;
  height: 5px;
  background-color: #e9ecef;
  border-radius: 10px;
  box-shadow: inset 0 0 5px #f8f9fa;
  display: flex;
  margin-left: -100%;
`;

const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #96e6a1;
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

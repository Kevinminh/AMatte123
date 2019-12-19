import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Accordion = props => {
  const [isActive, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = isActive
      ? `${contentRef.current.scrollHeight}px`
      : `0px`;
  }, [contentRef, isActive]);

  const toggleActive = () => {
    setActive(!isActive);
  };

  const titleStyle = {
    color: "#283464",
    fontWeight: 900,
    fontSize: "16px"
  };

  return (
    <div className="course-accordion-section">
      <button
        className={
          isActive
            ? `course-accordion-title active-lesson`
            : `course-accordion-title`
        }
        onClick={toggleActive}
      >
        <Section>
          <div className="flex">
            <div className="">
              <p> 0%</p>
            </div>
            <div>
              <p style={titleStyle}>{props.title}</p>
            </div>
            <div className="">
              <p>100%</p>
            </div>
          </div>
        </Section>

        <span className={isActive ? `accordion-icon rotate` : `accordion-icon`}>
          >
        </span>
      </button>

      <div ref={contentRef} className="course-accordion-content">
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0 0 0;

  .first-div {
    width: 20%;
  }

  .second-div {
    width: 10%;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 13px;
  }

  .progress {
    margin-top: -10px;
  }
`;

import React, { Component } from "react";
import ProgressBar from "../../progressBar";
import styled from "styled-components";
import M from "materialize-css";
import { Icon } from "react-icons-kit";
import { squareO } from "react-icons-kit/fa/squareO";

import questions from "../../../../modules/api/quiz/grunnleggende/kap1/kap1s";

// IS EMPTY
import isEmpty from "../../../../utils/is-empty";

class QuizIndex extends Component {
  // SETTING VARIABLES
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0,
      questions: questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      correct: false,
      wrong: false,
      wrongAnswers: 0,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      nulls: null,
      time: {}
    };
  }

  componentDidMount() {
    const {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    } = this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
  }

  // DISPLAYING QUESTIONS
  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;
      this.setState(
        {
          currentQuestion,
          nextQuestion,
          previousQuestion,
          numberOfQuestions: questions.length,
          answer
        },
        () => {
          this.handleDisableButton();
        }
      );
    }
  };

  handleNextButtonClick = () => {
    if (this.state.nextQuestion !== undefined) {
      this.setState(progress => ({
        percentage: progress.percentage + 22,
        correct: false
      }));

      this.setState(
        prevState => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handlePreviousButtonClick = () => {
    if (this.state.previousQuestion !== undefined) {
      this.setState(progress => ({
        percentage: progress.percentage - 22
      }));
      this.setState(
        prevState => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  // BUTTON FUNCTIONALITY
  handleOptionClick = e => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      this.correctAnswer();
      this.handleCorrect();
    } else {
      this.wrongAnswer();
    }
  };

  // CORRECT ANSWER

  correctAnswer = () => {
    M.toast({
      html: "Riktig!",
      classes: "toast-valid",
      displayLength: 1500
    });

    this.setState(progress => ({
      percentage: progress.percentage + 0
    }));

    this.setState(
      prevState => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 0,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 0
      }),

      // Displaying next question
      () => {
        this.displayQuestions(
          this.state.questions,
          this.state.currentQuestion,
          this.state.nextQuestion,
          this.state.previousQuestion
        );
      }
    );
  };

  // WRONG ANSWER

  wrongAnswer = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "Feil :(",
      classes: "toast-invalid",
      displayLength: 1500
    });
    this.setState(
      prevState => ({
        wrongAnswers: prevState.wrongAnswers + 0,
        currentQuestionIndex: prevState.currentQuestionIndex + 0,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 0
      })

      //Displaying next question
    );
  };

  handleDisableButton = () => {
    if (
      this.state.previousQuestion === undefined ||
      this.currentQuestionIndex === 0
    ) {
      this.setState({
        previousButtonDisabled: true
      });
    } else {
      this.setState({
        previousButtonDisabled: false
      });
    }
    if (
      this.state.nextQuestion === undefined ||
      this.state.currentQuestionIndex + 1 ===
        this.state.numberOfAnsweredQuestions
    ) {
      this.setState({
        nextButtonDisabled: true
      });
    } else {
      this.setState({
        nextButtonDisabled: false
      });
    }
  };

  handleCorrect = () => {
    this.setState({ correct: true });
  };

  render() {
    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions
    } = this.state;
    return (
      <Body>
        <div className="quiz-container">
          <div className="flex-column flex-center justify-center">
            <ProgressBarContainer className="flex-center justify-center quizTitle">
              <h3 style={{ fontWeight: "500", fontSize: "18px" }}>
                {this.props.title}
              </h3>
              <span className="quizInfo">
                Spørsmål {currentQuestionIndex + 1} av {numberOfQuestions}
              </span>
              <ProgressBar
                className="center flex-center justify-center"
                percentage={this.state.percentage}
              />
            </ProgressBarContainer>

            <h2 className="quizQuestion">{currentQuestion.question}</h2>
            <div className="divider-1"></div>
            <div
              className={
                this.state.correct
                  ? "choice-container-correct"
                  : "choice-container"
              }
            >
              <Icon
                icon={squareO}
                style={{ marginTop: "-2%", padding: "0 10px" }}
              />
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionA}
              </p>
            </div>
            <div
              className={
                this.state.correct
                  ? "choice-container-correct"
                  : "choice-container"
              }
            >
              <Icon
                icon={squareO}
                style={{ marginTop: "-2%", padding: "0 10px" }}
              />
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionB}
              </p>
            </div>
            <div
              className={
                this.state.correct
                  ? "choice-container-correct"
                  : "choice-container"
              }
            >
              <Icon
                icon={squareO}
                style={{ marginTop: "-2%", padding: "0 10px" }}
              />
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionC}
              </p>
            </div>
            <div
              className={
                this.state.correct
                  ? "choice-container-correct"
                  : "choice-container"
              }
            >
              <Icon
                icon={squareO}
                style={{ marginTop: "-2%", padding: "0 10px" }}
              />
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionD}
              </p>
            </div>
            <div></div>
            <div className="button-container">
              <div>
                <button
                  className={
                    this.state.previousButtonDisabled ? "disable" : "quizPrev"
                  }
                  id="previous-button"
                  onClick={this.handlePreviousButtonClick}
                >
                  Forrige
                </button>
              </div>

              <div>
                <button
                  className={
                    this.state.nextButtonDisabled ? "disable" : "quizNext"
                  }
                  id="next-button"
                  onClick={this.handleNextButtonClick}
                >
                  Neste
                </button>
              </div>
            </div>
            <hr className="divider-1" />
          </div>
        </div>
      </Body>
    );
  }
}

export default QuizIndex;

const ProgressBarContainer = styled.div`
  width: 300px;
  margin-top: 50px;
  text-align: center;
`;

const Body = styled.div`
  margin-top: -150px;
  position: relative;

  h2 {
    margin-top: 25px;
    font-size: 18px;
    font-weight: 500;
  }

  .quizInfo {
    color: #a9a9a9;
    font-size: 13px;
  }

  .absolute {
    position: absolute;
    margin-top: -1.2%;
  }

  .light {
    color: #a9a9a9;
  }
`;

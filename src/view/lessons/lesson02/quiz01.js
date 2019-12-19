import React, { Component } from "react";
import ProgressBar from "../progressBar";
import styled from "styled-components";
import M from "materialize-css";
import questions from "../../../modules/api/quiz/grunnleggende/kap1/kap1s";

// IS EMPTY
import isEmpty from "../../../utils/is-empty";

class test2 extends Component {
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
      numberOfAnsweredQuestionss: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      fiftyfity: 2,
      usedFiftyFifty: false,
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
    previousQuestion,
    percentage
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;
      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        numberOfQuestions: questions.length,
        answer
      });
    }
  };

  handleNextButtonClick = () => {
    if (this.state.nextQuestion !== undefined) {
      this.setState(progress => ({
        percentage: progress.percentage + 7.2
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
        percentage: progress.percentage - 7.2
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
      percentage: progress.percentage + 7.2
    }));

    this.setState(
      prevState => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
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
            <div className="info-container">
              <AppWrapper>
                <ProgressBarContainer>
                  <span>
                    Spørsmål {currentQuestionIndex + 1} av {numberOfQuestions}
                  </span>
                  <ProgressBar percentage={this.state.percentage} />
                </ProgressBarContainer>
              </AppWrapper>
            </div>
            <h2>{currentQuestion.question}</h2>
            <div className="choice-container">
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionA}
              </p>
            </div>
            <div className="choice-container">
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionB}
              </p>
            </div>
            <div className="choice-container">
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionC}
              </p>
            </div>
            <div className="choice-container">
              <p onClick={this.handleOptionClick} className="option">
                {currentQuestion.optionD}
              </p>
            </div>
            <div className="button-container">
              <div>
                {" "}
                <button
                  id="previous-button"
                  className="quiz-btn-previous"
                  onClick={this.handlePreviousButtonClick}
                >
                  Forrige
                </button>
              </div>

              <div>
                <button
                  id="next-button"
                  className="quiz-btn"
                  onClick={this.handleNextButtonClick}
                >
                  Neste
                </button>
              </div>
            </div>
          </div>
        </div>
      </Body>
    );
  }
}

export default test2;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProgressBarContainer = styled.div`
  width: 300px;
  margin-top: 50px;
  text-align: center;
`;

const Body = styled.div`
  margin-top: -150px;

  h2 {
    margin-top: 25px;
  }
`;

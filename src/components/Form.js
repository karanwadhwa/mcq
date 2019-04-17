import React, { Component } from "react";

import MCQ from "./MCQ";
import Result from "./Result";
import questions from "../questions";

class Form extends Component {
  state = {
    currentQuestion: questions[0],
    selectedOption: "",
    answeredQuestions: [],
    upcomingQuestions: questions
  };

  selectOption = selectedOption => this.setState({ selectedOption });

  submitAnswer = () => {
    // update answeredQuestions array
    let answeredQuestions = this.state.answeredQuestions;
    answeredQuestions.push({
      ...this.state.currentQuestion,
      selectedAnswer: this.state.selectedOption
    });

    // update upcomingQuestions array
    let upcomingQuestions = this.state.upcomingQuestions;
    const currentQuestionIndex = upcomingQuestions.findIndex(
      question => question.id === this.state.currentQuestion.id
    );
    upcomingQuestions.splice(currentQuestionIndex, 1);

    // reset state
    this.setState({
      currentQuestion: upcomingQuestions[0],
      selectedOption: "",
      answeredQuestions,
      upcomingQuestions
    });
  };

  render() {
    const {
      currentQuestion,
      selectedOption,
      answeredQuestions,
      upcomingQuestions
    } = this.state;

    return (
      <div className="form-container">
        {upcomingQuestions.length === 0 ? (
          <Result />
        ) : (
          <MCQ
            currentQuestion={currentQuestion}
            selectedOption={selectedOption}
            answeredQuestions={answeredQuestions}
            upcomingQuestions={upcomingQuestions}
            selectOption={this.selectOption}
            submitAnswer={this.submitAnswer}
          />
        )}
      </div>
    );
  }
}

export default Form;

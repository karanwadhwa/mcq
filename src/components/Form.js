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

  render() {
    const {
      currentQuestion,
      selectedOption,
      answeredQuestions,
      upcomingQuestions
    } = this.state;

    return (
      <div className="form-container">
        <MCQ
          currentQuestion={currentQuestion}
          selectedOption={selectedOption}
          answeredQuestions={answeredQuestions}
          upcomingQuestions={upcomingQuestions}
          selectOption={this.selectOption}
        />
      </div>
    );
  }
}

export default Form;

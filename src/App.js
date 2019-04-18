import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Form from "./components/Form";
import questions from "./questions";

class App extends Component {
  state = {
    currentQuestion: questions[0],
    selectedOption: "",
    answeredQuestions: [],
    upcomingQuestions: [...questions]
  };

  // Note to Self:
  // This is definitely not the most elegant way to handle the state
  // The code is extremely messy after moving it over to the root component
  // But since its a really simple app, I went with the React state over redux store
  // which would've definitely been the better choice had I not put the progress indicator in the Navbar
  // either ways its simple enough to understand and the app doesnt demand a lot so I'm leaving it this way.

  // select MCQ option
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
      <div className="App">
        <div className="container">
          <Navbar
            // when the upcoming questions array runs out, there wont be anything left to set currentQuestion to;
            // so cQ would be undefined, i.e. when the app switches from MCQ component to Result
            current={currentQuestion ? currentQuestion.id : questions.length}
            length={questions.length}
          />
          <Form
            currentQuestion={currentQuestion}
            selectedOption={selectedOption}
            answeredQuestions={answeredQuestions}
            upcomingQuestions={upcomingQuestions}
            selectOption={this.selectOption}
            submitAnswer={this.submitAnswer}
          />
        </div>
      </div>
    );
  }
}

export default App;

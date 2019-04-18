import React, { Component } from "react";

class Result extends Component {
  render() {
    const { answeredQuestions } = this.props;

    // iterate through the answeredQuestions array and display Result for each answer
    return answeredQuestions.map(
      ({ id, question, answer, selectedAnswer, options }) => {
        const correctAnswer = selectedAnswer === answer.value;

        return (
          <div
            // attach class alert-success for correct answer & alert-danger for incorrect
            className={`alert alert-${correctAnswer ? "success" : "danger"}`}
            role="alert"
            key={id}
          >
            <h4 className="alert-heading">
              {correctAnswer ? "Well done!" : "Oops!"}
            </h4>
            <p>
              {id}. {question}
            </p>
            <hr />
            <ul>
              {options.map(option => (
                <li key={option.id}>
                  {option.value === answer.value ? (
                    //highlight the correct answer in bold
                    <strong>{option.value}</strong>
                  ) : option.value === selectedAnswer ? (
                    // strikethrough if the user has selected an incorrect option
                    <del>{option.value}</del>
                  ) : (
                    // display as is if none of the above conditions are satisfied
                    option.value
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      }
    );
  }
}

export default Result;

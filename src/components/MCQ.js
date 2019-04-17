import React, { Component } from "react";

class MCQ extends Component {
  renderOptions = () => {
    const { currentQuestion, selectedOption } = this.props;
    return currentQuestion.options.map(option => (
      <div className="custom-control custom-radio" key={option.id}>
        <input
          type="radio"
          id={`option${option.id}`}
          name={`question${currentQuestion.id}`}
          value={option.value}
          onChange={e => this.props.selectOption(e.target.value)}
          className="custom-control-input"
          checked={option.value === selectedOption}
        />
        <label className="custom-control-label" htmlFor={`option${option.id}`}>
          {option.value}
        </label>
      </div>
    ));
  };

  render() {
    const { currentQuestion } = this.props;
    return (
      <div className="mcq">
        <h5>{currentQuestion.question}</h5>
        <hr />
        <div>{this.renderOptions()}</div>
      </div>
    );
  }
}

export default MCQ;

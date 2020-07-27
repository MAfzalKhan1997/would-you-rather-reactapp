import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { handleAddQuestion } from "../redux/actions/questions";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    toHome: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { dispatch } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState({
      optionOneText: "",
      optionTwoText: "",
      toHome: true,
    });
  };

  handleInputChange = (event, type) => {
    const value = event.target.value;

    this.setState((state) => {
      return type === "option1"
        ? { ...state, optionOneText: value }
        : { ...state, optionTwoText: value };
    });
  };

  render() {
    const { toHome } = this.state;

    if (toHome) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div
        style={{
          height: 162,
          boxShadow: "0px 1px 5px grey",
          borderRadius: 10,
          marginBottom: 20,
          padding: 10,
          marginTop: 50,
          height: 300,
        }}
      >
        <h2 style={{ color: "orange" }}>Create New Question</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ fontWeight: "bold" }}>Would you rather...</div>
          <input
            name="optionOneText"
            type="text"
            placeholder="Enter Option One Text Here"
            value={this.state.optionOneText}
            onChange={(event) => this.handleInputChange(event, "option1")}
          />
          <div>Or</div>
          <input
            name="optionTwoText"
            type="text"
            placeholder="Enter Option Two Text Here"
            value={this.state.optionTwoText}
            onChange={(event) => this.handleInputChange(event, "option2")}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              color: "white",
              backgroundColor: "#1d60c4",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);

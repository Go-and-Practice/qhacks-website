import React, { Component } from "react";
import ActionButton from "./ActionButton";
import circleCheck from "../assets/img/circleCheck.svg";
import circleTimes from "../assets/img/circleTimes.svg";
import spinner from "../assets/img/spinner.svg";
import circleCheckWhite from "../assets/img/circleCheck-white.svg";
import circleTimesWhite from "../assets/img/circleTimes-white.svg";
import spinnerWhite from "../assets/img/spinner-white.svg";

class SignUpForm extends Component {
  state = {
    status: null,
    message: null,
    emailAddress: "",
    boldMessage: ""
  };

  signUp() {
    // Simulate a sign up request
    this.setState({ status: "loading", message: "", boldMessage: "" });
    const delay = Math.random() * 4000 + 2000;
    const resetStatus = () =>
      setTimeout(
        () => this.setState({ status: null, message: "", boldMessage: "" }),
        3500
      );
    if (Math.random() >= 0.5) {
      setTimeout(() => {
        this.setState({
          status: "success",
          boldMessage: this.state.emailAddress,
          message: "has been added to our mailing list."
        });
        resetStatus();
      }, delay);
    } else {
      setTimeout(() => {
        this.setState({
          status: "failure",
          boldMessage: "Invalid email address.",
          message: ""
        });
        resetStatus();
      }, delay);
    }
  }

  render() {
    let buttonContent = "";
    const whiteIcons =
      this.props.foregroundColor &&
      ["#fff", "#ffffff", "white"].includes(
        this.props.foregroundColor.toLowerCase()
      );
    switch (this.state.status) {
    case "loading": {
      buttonContent = (
        <img
          src={whiteIcons ? spinnerWhite : spinner}
          style={{
            animation: "spin 2s infinite linear"
          }}
        />
      );
      break;
    }
    case "success": {
      buttonContent = (
        <img src={whiteIcons ? circleCheckWhite : circleCheck} />
      );
      break;
    }
    case "failure": {
      buttonContent = (
        <img src={whiteIcons ? circleTimesWhite : circleTimes} />
      );
      break;
    }
    default: {
      buttonContent = "Sign Up";
      break;
    }
    }

    return (
      <div
        style={{
          width: "530px",
          margin: this.props.center ? "0 auto" : "12px 0 0 8px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <input
            placeholder="Enter your email address"
            type="email"
            style={{
              flex: "1",
              padding: "0 16px",
              height: "48px",
              lineHeight: "48px",
              borderRadius: "4px",
              border: "none",
              fontSize: this.props.fontSize || "16px",
              margin: "0 8px 0 0"
            }}
            data-cy={this.props.dataCyInput || "signup-input"}
            value={this.state.emailAddress}
            onChange={(e) => this.setState({ emailAddress: e.target.value })}
          />
          <ActionButton
            backgroundColor={this.props.backgroundColor || "white"}
            foregroundColor={this.props.foregroundColor || "black"}
            hoverBackgroundColor={this.props.hoverBackgroundColor} // can be null
            type="rect"
            onClick={() => this.signUp()}
            width="130px"
            disabled={!!this.state.status}
            data-cy={this.props.dataCyButton || "signup-button"}
          >
            {buttonContent}
          </ActionButton>
        </div>
        <p
          style={{
            marginTop: "8px",
            height: "22px",
            fontWeight: "500",
            lineHeight: "22px"
          }}
        >
          {this.state.boldMessage ? (
            <strong>
              {this.state.boldMessage}
              &nbsp;
            </strong>
          ) : (
            ""
          )}
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default SignUpForm;
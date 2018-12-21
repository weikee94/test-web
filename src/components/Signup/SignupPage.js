import React, { Component } from "react";
import SignupForm from "./SignupForm";

class SignupPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <SignupForm />
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default SignupPage;

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

// const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";
const rootAPI = "http://localhost:3000/";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      errors: {},
      isLoading: true
    });

    const body = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(body);

    axios.post(`${rootAPI}users/login`, body).then(
      res => {
        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        setTimeout(this.props.history.push("/"), 3000);
      },
      error => {
        this.setState({
          isLoading: false
        });
        console.log("Error from login: ", error);
      }
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Welcome</h1>
          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={this.onChange}
              value={this.state.email}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.onChange}
              value={this.state.password}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-lg"
              disabled={this.state.isLoading}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);

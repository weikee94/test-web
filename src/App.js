import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      email: "",
      password: "",
      loginemail: "",
      loginpassword: ""
    };
  }

  componentDidMount() {
    axios.get(`${rootAPI}todos`).then(res => {
      const todos = res.data.todos;
      this.setState({
        todos
      });
    });
  }

  handleChange(event) {
    let name, obj;
    name = event.target.name;
    console.log(event.target.value);
    this.setState(((obj = {}), (obj["" + name] = event.target.value), obj));
  }

  deleteHandler = id => {
    axios.delete(`${rootAPI}todos/${id}`);
  };

  registerHandler = () => {
    console.log(this.state);
    const body = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post(`${rootAPI}users`, body);
  };

  loginHandler = () => {
    console.log(this.state);
    const body = {
      email: this.state.loginemail,
      password: this.state.loginpassword
    };
    axios.post(`${rootAPI}users/login`, body);
  };

  render() {
    return (
      <div className="App">
        <div>sign up</div>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={() => this.registerHandler()}>sign up</button>

        <div>login</div>
        <input
          type="text"
          placeholder="email"
          name="loginemail"
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="text"
          placeholder="password"
          name="loginpassword"
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={() => this.loginHandler()}>login</button>
        <NavLink to="/create">
          <div>create</div>
        </NavLink>
        <div className="container">
          <div className="row">
            {this.state.todos.length > 0
              ? this.state.todos.map((data, i) => (
                  <div className="col-md-4" key={i}>
                    <div>
                      <img
                        src={data.cover}
                        style={{ width: 100 }}
                        alt={data.text}
                      />
                      <div>{data.text}</div>
                    </div>
                    <div>
                      <NavLink to={`/product/${data._id}`}>
                        <button className="btn btn-primary">edit</button>
                      </NavLink>
                      <button
                        className="btn btn-danger"
                        onClick={id => this.deleteHandler(data._id)}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

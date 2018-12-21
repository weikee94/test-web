import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";
// const rootAPI = "http://localhost:3000/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      email: "",
      password: "",
      loginemail: "",
      loginpassword: "",
      authString: ""
    };
  }

  componentDidMount() {
    // const authString = this.state.authString;
    const authString = localStorage.getItem("jwtToken");

    axios
      .get(`${rootAPI}todos`, {
        headers: {
          "x-auth": authString
        }
      })
      .then(res => {
        console.log("Response: ", res);
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
    const body = {
      email: this.state.loginemail,
      password: this.state.loginpassword
    };
    console.log(body);
    axios.post(`${rootAPI}users/login`, body).then(
      res => {
        // console.log("response from login: ", res);

        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        this.setState({
          authString: res.data.token
        });
      },
      error => {
        console.log("Error from login: ", error);
      }
    );
  };

  render() {
    return (
      <div className="App">
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

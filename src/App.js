import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
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

  render() {
    return (
      <div className="App">
        <NavLink to="/create">
          <div>create</div>
        </NavLink>
        {this.state.todos.length > 0
          ? this.state.todos.map((data, i) => <div key={i}>{data.text}</div>)
          : null}
      </div>
    );
  }
}

export default App;

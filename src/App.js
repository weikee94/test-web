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

  deleteHandler = id => {
    axios.delete(`${rootAPI}todos/${id}`);
  };

  render() {
    return (
      <div className="App">
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

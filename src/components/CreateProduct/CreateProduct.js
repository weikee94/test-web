import React, { Component } from "react";
import axios from "axios";

// const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";
const rootAPI = "http://localhost:3000/";

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      cover: ""
    };
  }
  submitHandler = () => {
    const authString = localStorage.getItem("jwtToken");

    axios
      .post(`${rootAPI}todos`, this.state, {
        headers: {
          "x-auth": authString
        }
      })
      .then(
        () => {
          console.log("success");
        },
        () => {
          console.log("failed");
        }
      );
  };

  handleChange(event) {
    let name, obj;
    name = event.target.name;
    console.log(event.target.value);
    this.setState(((obj = {}), (obj["" + name] = event.target.value), obj));
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <form>
            <h1>Create</h1>
            <div className="form-group">
              <label className="control-label">Text</label>
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange.bind(this)}
                placeholder="text"
                name="text"
                value={this.state.text}
              />
              <label className="control-label">Cover</label>
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange.bind(this)}
                placeholder="cover"
                name="cover"
                value={this.state.cover}
              />
            </div>
          </form>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={() => this.submitHandler()}
          >
            submit
          </button>
        </div>
        <div className="col=md-3" />
      </div>
    );
  }
}

export default CreateProduct;

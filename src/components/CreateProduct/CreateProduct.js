import React, { Component } from "react";
import axios from "axios";

const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  submitHandler = () => {
    console.log("Submitted!");
    axios.post(`${rootAPI}todos`, this.state);
  };

  handleChange(event) {
    let name, obj;
    name = event.target.name;
    console.log(event.target.value);
    this.setState(((obj = {}), (obj["" + name] = event.target.value), obj));
  }
  render() {
    return (
      <div>
        <form className="form">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              placeholder="text"
              name="text"
              value={this.state.text}
            />
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.submitHandler()}
        >
          submit
        </button>
      </div>
    );
  }
}

export default CreateProduct;

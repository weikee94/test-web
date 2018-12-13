import React, { Component } from "react";
import axios from "axios";

const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: ""
    };
  }
  componentDidMount() {
    axios.get(`${rootAPI}todos/${this.props.match.params.id}`).then(res => {
      const data = res.data.todo;
      this.setState({
        data,
        text: data.text
      });
    });
  }

  changeHandler = e => {
    let name, obj;
    name = e.target.name;
    this.setState(((obj = {}), (obj["" + name] = e.target.value), obj));
    console.log("updated valud: ", this.state.text);
  };

  updateHandler = () => {
    axios
      .patch(`${rootAPI}todos/${this.props.match.params.id}`, {
        text: this.state.text
      })
      .then(success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.data !== null ? this.state.data.text : null}
        <div>
          <input
            name="text"
            type="text"
            className="form-control"
            value={this.state.text}
            onChange={e => this.changeHandler(e)}
          />
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => this.updateHandler()}
          >
            update
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;

import React, { Component } from "react";
import axios from "axios";

// const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";
const rootAPI = "http://localhost:3000/";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: "",
      cover: ""
    };
  }
  componentDidMount() {
    axios.get(`${rootAPI}todos/${this.props.match.params.id}`).then(res => {
      const data = res.data.todo;
      this.setState({
        data,
        text: data.text,
        cover: data.cover
      });
    });
  }

  changeHandler = e => {
    let name, obj;
    name = e.target.name;
    this.setState(((obj = {}), (obj["" + name] = e.target.value), obj));
  };

  updateHandler = () => {
    console.log("Submitted valud: ", this.state);
    axios
      .patch(`${rootAPI}todos/${this.props.match.params.id}`, {
        text: this.state.text,
        cover: this.state.cover
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
          <input
            type="text"
            name="cover"
            className="form-control"
            value={this.state.cover}
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

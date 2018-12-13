import React, { Component } from "react";
import axios from "axios";

const rootAPI = "https://stark-anchorage-68703.herokuapp.com/";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get(`${rootAPI}todos/${this.props.match.params.id}`).then(res => {
      const data = res.data.todo;
      this.setState({
        data
      });
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.data !== null ? this.state.data.text : null}
        <div>
          <button className="btn btn-primary">update</button>
        </div>
      </div>
    );
  }
}

export default ProductDetails;

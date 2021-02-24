import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - it re-rendered!");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>Loading</div>;
    }
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));

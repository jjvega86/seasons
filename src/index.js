import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay/SeasonDisplay";
import Loader from "./components/Loader/Loader";

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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Loader message="Please accept location request" />;
    }
  }

  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));

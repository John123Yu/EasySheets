import React, { Component } from "react";
import Map from "./containers/map";
import jQuery from "jquery";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

document.write("HELLO");
// let cellInput: String = "";
document.body.addEventListener("keydown", e => {
  console.log(jQuery(document));
});
export default App;

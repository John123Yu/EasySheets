import React, { Component } from "react";
import Map from "./containers/map";
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

sessionStorage.setItem("keydown", "");

document.body.addEventListener("keydown", e => {
  let keydown = sessionStorage.getItem("keydown");
  let keyCodeString = String.fromCharCode(e.keyCode);
  if (validAlphaNum(keyCodeString)) keydown += e.key;
  if (e.keyCode === 8) keydown = "";
  sessionStorage.setItem("keydown", keydown);
  console.log(keydown);
});

export default App;

let validAlphaNum = input => {
  //regex for number, symbol, letter
  if (/[a-zA-Z0-9-_]/.test(input)) return true;
  return false;
};

import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {} from "../actions/index";
import classNames from "classnames";
import validAlphaNum from "../helpers/primary";

// import Rx from "rx";
export default function CellHook(props) {
  const [cellput, setCellput] = useState("");

  function handleClick(e) {
    console.log("click");
  }
  function handleKeyDown(e) {
    let keyCodeString = String.fromCharCode(e.keyCode);
    let key = e.key;
    if (validAlphaNum(keyCodeString)) setCellput(state => (state += key));
    if (e.keyCode === 8) setCellput(state => (state = ""));
  }

  let classes = classNames({
    cell: true
  });

  return (
    <td
      tabIndex="1"
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      //   onChange={this.handleChange}
      //   onContextMenu={this.handleContextMenu}
      // onDoubleClick={this.handleDoubleClick}
      // onMouseOver={this.handleMouseOver}
      // onMouseOut={this.handleMouseOut}
      //   onMouseDown={this.handleMouseDown}
    >
      {cellput}
    </td>
  );
}

import React, { useState } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import {} from "../actions/index";
import classNames from "classnames";
import { validAlphaNum } from "../helpers/primary";

// import Rx from "rx";
export default function CellHook(props) {
  //   console.log(props);
  let { handleKeyDown, theMap } = props;
  console.log("HEREEEE", theMap);
  //   const [cellput, setCellput] = useState("");
  const [state, setState] = useState(false);

  //   props.handleKeyDown(23, 1, 1);
  function handleKeyDownWrap(e) {
    console.log(e);
    setState(!state);
    return handleKeyDown(e);
  }
  console.log(handleKeyDown);
  function handleClick(e) {
    console.log("click");
  }
  //   function handleKeyDown(e) {
  //     let keyCodeString = String.fromCharCode(e.keyCode);
  //     let key = e.key;
  //     if (validAlphaNum(keyCodeString)) setCellput(state => (state += key));
  //     if (e.keyCode === 8) setCellput(state => (state = ""));
  //   }

  let classes = classNames({
    cell: true
  });

  return (
    <td
      tabIndex="1"
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDownWrap}
      //   onChange={this.handleChange}
      //   onContextMenu={this.handleContextMenu}
      // onDoubleClick={this.handleDoubleClick}
      // onMouseOver={this.handleMouseOver}
      // onMouseOut={this.handleMouseOut}
      //   onMouseDown={this.handleMouseDown}
    >
      {theMap}
    </td>
  );
}

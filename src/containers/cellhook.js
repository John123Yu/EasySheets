import React, { useState } from "react";
import {} from "../actions/index";
import classNames from "classnames";
// import Rx from "rx";

export default function CellHook(props) {
  let { handleKeyDown, handleClick, theMap, row, column } = props;
  //   console.log("CELL RERENDER", row, column);
  const [state, setState] = useState(false);

  function handleKeyDownWrap(e) {
    setState(!state);
    return handleKeyDown(row, column, e);
  }

  function handleClickWrap(e) {
    handleClick(row, column);
  }

  let classes = classNames({
    cell: true,
    selected: false
  });
  return (
    <td
      tabIndex="1"
      className={classes}
      onClick={handleClickWrap}
      onKeyDown={handleKeyDownWrap}
    >
      {theMap[row][column]}
    </td>
  );
}

// let handleKeyDownSetup = _.curry((row, column, e) => {
//   let keyCodeString = String.fromCharCode(e.keyCode);
//   let key = e.key;
//   if (validAlphaNum(keyCodeString)) theMap[row][column] += key;
//   if (e.keyCode === 8) theMap[row][column] = "";
// });

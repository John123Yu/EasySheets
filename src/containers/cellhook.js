import React, { useState } from "react";
import {} from "../actions/index";
import classNames from "classnames";
// import Rx from "rx";

export default function CellHook(props) {
  let { handleKeyDown, theMap, row, column } = props;
  console.log("CELL RERENDER", row, column);
  const [state, setState] = useState(false);

  function handleKeyDownWrap(e) {
    setState(!state);
    return handleKeyDown(e);
  }

  function handleClick(e) {
    console.log("click");
  }

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
      {theMap[row][column]}
    </td>
  );
}

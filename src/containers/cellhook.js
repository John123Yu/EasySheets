import React, { useState } from "react";
import {} from "../actions/index";
import classNames from "classnames";
// import Rx from "rx";

export default function CellHook(props) {
  let { handleKeyDown, handleClick, theMap, row, column } = props;
  //   console.log("CELL RERENDER", row, column);
  const [state, setState] = useState(false);
  let rerender = () => setState(!state);

  function handleKeyDownWrap(e) {
    rerender();
    return handleKeyDown(e);
  }
  function handleClickWrap(e) {
    rerender();
    handleClick(row, column);
  }

  let classes = classNames({
    cell: true,
    selected: false
  });
  return (
    <td
      tabIndex="1"
      id={`${row}_${column}`}
      className={classes}
      onClick={handleClickWrap}
      onKeyDown={handleKeyDownWrap}
      onChange={() => console.log("change")}
      //   onNavigate={() => console.log("nav")}
    >
      {theMap[row][column]}
    </td>
  );
}

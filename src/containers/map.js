import React, { useState } from "react";
import _ from "lodash";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { initMap } from "../actions/index";
// import Cell from "./cell";
import CellHook from "./cellhook";
import { nestedArray, validAlphaNum } from "../helpers/primary";

export default function Map() {
  const [theMap, setMap] = useState(() => {
    let initMap = nestedArray(4, 4);
    return initMap;
  });

  // console.log(theMap.map);

  let handleKeyDownSetup = _.curry((row, column, e) => {
    console.log("row", row);
    console.log("col", column);
    console.log("E", e)
    let keyCodeString = String.fromCharCode(e.keyCode);
    let key = e.key;
    if (validAlphaNum(keyCodeString)) theMap[row][column] += key
    if (e.keyCode === 8) theMap[row][column] = "";
    console.log(theMap)
  });

  // function handleKeyDown(e) {
  //   let row = 1;
  //   let column = 1;
  //   console.log("ehere,", e, row, column);
  //   let keyCodeString = String.fromCharCode(e.keyCode);
  //   let key = e.key;
  //   if (validAlphaNum(keyCodeString))
  //     setMap(theMap => (theMap[(row, column)] += key));
  //   if (e.keyCode === 8) setMap(theMap => (theMap[(row, column)] = ""));
  // }
  console.log("MAP", theMap)
  return (
    <div>
      <table>
        <tbody>
          {theMap.map((item, row) => {
            console.log("ITEM", item);
            return (
              <tr key={row} className="mapRow">
                {item.map((subitem, column) => {
                  const handleKeyDown = handleKeyDownSetup(row, column);
                  return (
                    <CellHook
                      key={column}
                      handleKeyDown={handleKeyDown}
                      theMap={theMap}
                      // clicked={this.props.clickedMap[row][column]}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

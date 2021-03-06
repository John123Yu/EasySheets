import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import CellHook from "./cellhook";
import { useInterval } from "../hooks";
import {
  nestedArray,
  extendNestedArray,
  nestedObj,
  extendNestedObj
} from "../helpers/primary";
import { mergeSort } from "../helpers/sorts";
import { createTempVariable } from "typescript";
//this variable name probably needs to be changed;
let theMap;

export default function Map() {
  const [state, setState] = useState(false);
  let rerender = () => setState(!state);
  console.log("MAP RERENDER");
  const [scrollX, setScrollX] = useState(window.scrollX);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [windowX, setWindowX] = useState(window.innerWidth);
  const [windowY, setWindowY] = useState(window.innerHeight);

  const cellsX = Math.floor((windowX + scrollX)/ 200);
  const cellsY = Math.floor((windowY + scrollY) / 60);
  let sR = 0; //selectedRow
  let sC = 0; //selectedCol
  // console.log("cellsX", cellsX)
  if (theMap === undefined) theMap = nestedArray(cellsY, cellsX);
  else theMap = extendNestedArray(cellsY, cellsX, theMap);
  // console.log(theMap)
  //---Temp Disable this---//
  // useInterval(() => {
  //   setScrollX(window.scrollX);
  //   setScrollY(window.scrollY);
  //   setWindowX(window.innerWidth);
  //   setWindowY(window.innerHeight);
  // }, 1000);
  // console.log("WindowX", windowX);
  // console.log("ScrollX", scrollX);
  let handleKeyDown = e => {
    e.preventDefault();
    console.log("keyCode", e.keyCode);
    switch (e.keyCode) {
      case 8:
        theMap[sR][sC] = "";
        break;
      case 37:
        sC--;
        break;
      case 38:
        sR--;
        break;
      case 39:
        sC++;
        break;
      case 40:
        sR++;
        break;
      case 17:
        break;
      default:
        theMap[sR][sC] += e.key;
    }
    document.getElementById(`${sR}_${sC}`).innerHTML = theMap[sR][sC];
  };
  function handleClick(row, col) {
    sR = row;
    sC = col;
  };
  function handleContextMenu(e) {
    e.preventDefault();
    theMap = theMap.sort(function(a,b){
      return b[0] - a[0]
    })
    console.log("this", theMap)
    rerender();
  }

  return (
    <div>
      <table>
        <tbody
          onContextMenu={handleContextMenu}
        >
          {theMap.map((item, row) => {
            return (
              <tr key={row} className="mapRow">
                {item.map((subitem, col) => {
                  return (
                    <CellHook
                      key={col}
                      row={row}
                      column={col}
                      // selected={sR===row && sC===col}
                      handleKeyDown={handleKeyDown}
                      handleClick={handleClick}
                      theMap={theMap}
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

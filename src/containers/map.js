import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import CellHook from "./cellhook";
import {
  nestedArray,
  validAlphaNum,
  extendNestedArray
} from "../helpers/primary";

//this variable name probably needs to be changed;
let theMap;

export default function Map() {
  console.log("MAP RERENDER");
  const [scrollX, setScrollX] = useState(window.scrollX);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [windowX, setWindowX] = useState(window.innerWidth);
  const [windowY, setWindowY] = useState(window.innerHeight);

  const cellsX = Math.floor(windowX / 100);
  const cellsY = Math.floor(windowY / 20);
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
      default:
        theMap[sR][sC] += e.key;
    }
    document.getElementById(`${sR}_${sC}`).innerHTML = theMap[sR][sC];
  };
  let handleClick = (row, col) => { sR = row; sC = col; };

  return (
    <div>
      <table>
        <tbody>
          {theMap.map((item, row) => {
            return (
              <tr key={row} className="mapRow">
                {item.map((subitem, column) => {
                  return (
                    <CellHook
                      key={column}
                      row={row}
                      column={column}
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

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

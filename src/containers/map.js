import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import CellHook from "./cellhook";
import { nestedArray, validAlphaNum, extendNestedArray } from "../helpers/primary";

let theMap;

export default function Map() {
  console.log("MAP RERENDER");
  const [scrollX, setScrollX] = useState(window.scrollX);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [windowX, setWindowX] = useState(window.innerWidth);
  const [windowY, setWindowY] = useState(window.innerHeight);
  
  const cellsX = Math.floor(windowX / 100);
  const cellsY = Math.floor(windowY / 20);
  // console.log("cellsX", cellsX)

  if (theMap === undefined) theMap = nestedArray(cellsY, cellsX);
  else theMap = extendNestedArray(cellsY, cellsX, theMap);
  // console.log(theMap)

  useInterval(() => {
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
    setWindowX(window.innerWidth);
    setWindowY(window.innerHeight);
  }, 1000);

  console.log("WindowX", windowX);
  console.log("ScrollX", scrollX);


  let handleKeyDownSetup = _.curry((row, column, e) => {
    let keyCodeString = String.fromCharCode(e.keyCode);
    let key = e.key;
    if (validAlphaNum(keyCodeString)) theMap[row][column] += key;
    if (e.keyCode === 8) theMap[row][column] = "";
  });

  return (
    <div>
      <table>
        <tbody>
          {theMap.map((item, row) => {
            return (
              <tr key={row} className="mapRow">
                {item.map((subitem, column) => {
                  const handleKeyDown = handleKeyDownSetup(row, column);
                  return (
                    <CellHook
                      key={column}
                      row={row}
                      column={column}
                      handleKeyDown={handleKeyDown}
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
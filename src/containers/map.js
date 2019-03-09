import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import CellHook from "./cellhook";
import { nestedArray, validAlphaNum } from "../helpers/primary";

export default function Map() {
  console.log("MAP RERENDER");
  const [theMap, setMap] = useState(() => {
    let initMap = nestedArray(4, 4);
    return initMap;
  });
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [scrollX, setScrollX] = useState(window.scrollX);

  useInterval(() => {
    setScrollY(window.scrollY);
    setScrollX(window.scrollX);
  }, 1000);
  console.log("X", scrollY);
  console.log("X", scrollX);


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
import React, { useState } from "react";
import _ from "lodash";
import CellHook from "./cellhook";
import { nestedArray, validAlphaNum } from "../helpers/primary";

export default function Map() {
  console.log("MAP RERENDER");
  const [theMap, setMap] = useState(() => {
    let initMap = nestedArray(4, 4);
    return initMap;
  });

  let handleKeyDownSetup = _.curry((row, column, e) => {
    let keyCodeString = String.fromCharCode(e.keyCode);
    let key = e.key;
    if (validAlphaNum(keyCodeString)) theMap[row][column] += key
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

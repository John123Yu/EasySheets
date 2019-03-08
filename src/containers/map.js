import React, { useState } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { initMap } from "../actions/index";
// import Cell from "./cell";
import CellHook from "./cellhook";
import { nestedArray } from "../helpers/primary";

export default function Map() {
  const [theMap, setMap] = useState(() => {
    let initMap = nestedArray(4, 4);
    return initMap;
  });

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

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { initMap } from "../actions/index";
import Cell from "./cell";

class Map extends Component {
  constructor(props) {
    super(props);

    this.props.initMap(4, 4);
  }
  renderMap() {
    if (this.props.actualMap.length) {
      let row = -1;
      let column = -1;
      let map = this.props.actualMap.map((item, index) => {
        row++;
        column = -1;
        return (
          <tr key={index} className="rowDiv">
            {item.map((subitem, i) => {
              column++;
              return (
                <Cell
                  key={Math.random()}
                  row={row}
                  column={column}
                  // clicked={this.props.clickedMap[row][column]}
                />
              );
            })}
          </tr>
        );
      });
      return map;
    }
  }
  render() {
    return (
      <div>
        <table>
          <tbody>{this.renderMap()}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ actualMap }) {
  return { actualMap };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initMap }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

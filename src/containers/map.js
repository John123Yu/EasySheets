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
      let map = this.props.actualMap.map((item, row) => {
        return (
          <tr key={row} className="mapRow">
            {item.map((subitem, column) => {
              return (
                <Cell
                  key={column}
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

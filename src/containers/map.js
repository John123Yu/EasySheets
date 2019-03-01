import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { initMap } from "../actions/index";
import Cell from "./cell";

class Map extends Component {
  constructor(props) {
    super(props);

    this.props.initMap(10, 10);
  }
  render() {
    return (
      <div>
        Hello Map <Cell />
      </div>
    );
  }
}

function mapStateToProps({}) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initMap }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

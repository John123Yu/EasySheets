import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {} from "../actions/index";
import classNames from "classnames";
// import Rx from "rx";

class Cell extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {}
  onContextMenu(e) {
    e.preventDefault();
  }
  render() {
    let classes = classNames({
      cell: true
    });
    return (
      <div
        className={classes}
        onClick={this.handleClick.bind(this)}
        onContextMenu={this.onContextMenu.bind(this)}
      />
    );
  }
}

function mapStateToProps({}) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);

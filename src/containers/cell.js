import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {} from "../actions/index";
import classNames from "classnames";
import jQuery from "jquery";

// import Rx from "rx";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  handleChange(e) {
    console.log("change", e);
    e.preventDefault();
  }
  handleContextMenu(e) {
    console.log("contextMenu", e);
    e.preventDefault();
  }
  handleClick(e) {
    console.log("click", e);
    e.preventDefault();
  }
  handleDoubleClick(e) {
    console.log("doubleClick", e);
    e.preventDefault();
  }
  handleKeyDown(e) {
    console.log("KeyDown", e);
    e.preventDefault();
  }
  handleMouseOver(e) {
    console.log("MouseOver", e);
    e.preventDefault();
  }
  handleMouseOut(e) {
    console.log("MouseOut", e);
    e.preventDefault();
  }
  handleMouseDown(e) {
    console.log("MouseDown", e);
    console.log("document", jQuery(document));
    // console.log(e.target);
    e.preventDefault();
  }
  render() {
    let classes = classNames({
      cell: true
    });
    return (
      <td
        tabIndex="1"
        className={classes}
        // onClick={this.handleClick}
        onChange={this.handleChange}
        onContextMenu={this.handleContextMenu}
        // onDoubleClick={this.handleDoubleClick}
        // onKeyDown={this.handleKeyDown}
        // onMouseOver={this.handleMouseOver}
        // onMouseOut={this.handleMouseOut}
        onMouseDown={this.handleMouseDown}
      />
    );
  }
}

// function mapStateToProps({}) {
//   return {};
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Cell);

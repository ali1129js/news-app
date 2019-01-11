/**
 * @Author: Ali
 * @Date:   2019-01-09T12:03:18+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-11T10:51:29+01:00
 */
import React, { Component } from "react";
// ["associated-press", "spiegel-online", "reddit-r-all"]
class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      changeSource: null,
      isOpen: false
    };
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleClicked = () => {
    this.setState(
      {
        changeSource: "associated-press"
      },
      () => {
        this.props.changeSource(this.state.changeSource);
      }
    );
  };
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div
        className="dropdown"
        style={{ margin: "0 auto" }}
        onClick={this.toggleOpen}
      >
        <button
          className="btn btn-danger dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Change News Source
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <button className="dropdown-item" onClick={this.handleClicked}>
            Associated Press
          </button>
          <a className="dropdown-item" href="#nogo">
            Spiegel-Online
          </a>
          <a className="dropdown-item" href="#nogo">
            Reddit
          </a>
        </div>
      </div>
    );
  }
}
export default DropDown;

/**
 * @Author: Ali
 * @Date:   2019-01-09T12:03:18+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-09T12:08:26+01:00
 */
import React, { Component } from "react";
class DropDown extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
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
          <a className="dropdown-item" href="#nogo">
            Item 1
          </a>
          <a className="dropdown-item" href="#nogo">
            Item 2
          </a>
          <a className="dropdown-item" href="#nogo">
            Item 3
          </a>
        </div>
      </div>
    );
  }
}
export default DropDown;

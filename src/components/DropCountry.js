/**
 * @Author: Ali
 * @Date:   2019-01-17T08:20:28+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-17T09:08:56+01:00
 */
/**
 * @Author: Ali
 * @Date:   2019-01-09T12:03:18+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-17T09:08:56+01:00
 */
import React, { Component } from "react";

class DropCountry extends Component {
  constructor() {
    super();
    this.state = {
      changeCountry: null,
      isOpen: false
    };
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleClose = e => {
    let value = e.target.value;
    this.setState(
      {
        changeCountry: value
      },
      () => {
        this.props.changeCountry(this.state.changeCountry);
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
          Change Country
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <button
            value={"de"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            Germany
          </button>
          <button
            value={"us"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            United States
          </button>

          <button
            value={"gb"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            United Kingdom
          </button>
          <button
            value={"fr"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            France
          </button>
          <button
            value={"ca"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            Canada
          </button>
          <button
            value={"ae"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            UAE
          </button>
        </div>
      </div>
    );
  }
}
export default DropCountry;

/**
 * @Author: Ali
 * @Date:   2019-01-09T12:03:18+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-11T15:07:34+01:00
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
  static defaultProps = {
    sources: ["associated-press", "die-zeit", "reddit-r-all", "reuters"]
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleClose = e => {
    let value = e.target.value;
    this.setState(
      {
        changeSource: value
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
          <button
            value={"google-news"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            Google News{" "}
          </button>
          <button
            value={"die-zeit"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            Die Zeit
          </button>
          <button
            value={"reddit-r-all"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            Reddit/all
          </button>
          <button
            value={"reuters"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            Reuters
          </button>
          <button
            value={"bild"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            Bild
          </button>
          <button
            value={"techcrunch"}
            className="dropdown-item"
            onClick={this.handleClose}
          >
            TechCrunch
          </button>
        </div>
      </div>
    );
  }
}
export default DropDown;

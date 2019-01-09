/**
 * @Author: Ali
 * @Date:   2018-12-20T15:33:39+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-09T12:07:06+01:00
 */

import React, { Component } from "react";
import News from "./News/News";
import SideNews from "./News/SideNews";
import DropDown from "./DropDown";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">My Feed</span>
          <DropDown />
        </nav>
        <div className="row">
          <div className="col-sm-8">
            <News />
          </div>
          <div className="col-sm-4">
            <SideNews />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

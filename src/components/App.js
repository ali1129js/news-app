/**
 * @Author: Ali
 * @Date:   2018-12-20T15:33:39+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-09T12:23:22+01:00
 */

import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import News from "./News/News";
import SideNews from "./News/SideNews";
import DropDown from "./DropDown";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <div className="container-fluid">
              <nav className="navbar sticky-top navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">My Feed</span>
                <Route path="/" component={DropDown} />
              </nav>
              <div className="row">
                <div className="col-sm-8">
                  <Route exact path="/" component={News} />
                </div>
                <div className="col-sm-4">
                  <Route exact path="/" component={SideNews} />
                </div>
              </div>
            </div>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;

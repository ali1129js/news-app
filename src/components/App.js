/**
 * @Author: Ali
 * @Date:   2018-12-20T15:33:39+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-26T10:59:49+02:00
 */

import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import News from "./News/News";
import SideNews from "./News/SideNews";
import DropDown from "./DropDown";
import DropCountry from "./DropCountry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sourceName: "wired",
      country: "de",
      newCountry: null,
      newSource: null
    };
    this.changeSource = this.changeSource.bind(this);
    this.changeCountry = this.changeCountry.bind(this);
  }
  changeSource(source) {
    this.setState({
      newSource: source
    });
  }
  changeCountry(source) {
    this.setState({
      newCountry: source
    });
  }
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Fragment>
              <div className="container-fluid">
                <nav className="navbar sticky-top navbar-dark bg-dark">
                  <span className="navbar-brand mb-0 h1">My Feed</span>
                  <Route
                    path="/"
                    render={() => <DropDown changeSource={this.changeSource} />}
                  />
                  <Route
                    path="/"
                    render={() => (
                      <DropCountry changeCountry={this.changeCountry} />
                    )}
                  />
                </nav>
                <div className="row">
                  <div className="col-sm-8">
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <News
                          newSource={this.state.newSource}
                          sourceName={this.state.sourceName}
                        />
                      )}
                    />
                  </div>
                  <div className="col-sm-4">
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <SideNews
                          newCountry={this.state.newCountry}
                          country={this.state.country}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;

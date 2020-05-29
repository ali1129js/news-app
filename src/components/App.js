/**
 * @Author: Ali
 * @Date:   2018-12-20T15:33:39+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-29T12:49:20+02:00
 */

import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Grid from "./Grid";
import Nav from "./Nav";

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
                <Nav
                  changeSource={this.changeSource}
                  changeCountry={this.changeCountry}
                />
                <Grid
                  newSource={this.state.newSource}
                  sourceName={this.state.sourceName}
                  newCountry={this.state.newCountry}
                  country={this.state.country}
                />
              </div>
            </Fragment>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;

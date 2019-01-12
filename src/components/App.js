/**
 * @Author: Ali
 * @Date:   2018-12-20T15:33:39+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-12T03:31:42+01:00
 */

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./News/News";
import SideNews from "./News/SideNews";
import DropDown from "./DropDown";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sourceName: "wired",
      newSource: null
    };
    this.changeSource = this.changeSource.bind(this);
  }
  changeSource(source) {
    this.setState({
      newSource: source
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
                    <Route exact path="/" component={SideNews} />
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

/**
 * @Author: Ali
 * @Date:   2018-12-20T15:33:39+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-21T06:11:09+01:00
 */

import React, { Component } from 'react';
import './App.css';
import News from './News/News'
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">My Feed</span>
      </nav>
        <News />
      </div>
    );
  }
}

export default App;

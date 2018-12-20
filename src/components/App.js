/**
 * @Author: Ali
 * @Date:   2018-12-20T15:33:39+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-20T16:36:07+01:00
 */

import React, { Component } from 'react';
import './App.css';
import News from './News/News'
class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title"> My Feed</h1>
      </header>
        <News />
      </div>
    );
  }
}

export default App;

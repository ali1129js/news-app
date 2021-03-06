/**
 * @Author: Ali
 * @Date:   2018-12-20T15:33:06+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-21T05:39:50+01:00
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

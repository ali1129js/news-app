/**
 * @Author: Ali
 * @Date:   2020-05-27T17:40:56+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-27T17:46:29+02:00
 */
import React from "react";
import { Route } from "react-router-dom";
import DropDown from "./DropDown";
import DropCountry from "./DropCountry";

const Nav = props => (
  <nav className="navbar sticky-top navbar-dark bg-dark">
    <span className="navbar-brand mb-0 h1">My Feed</span>
    <Route
      path="/"
      render={() => <DropDown changeSource={props.changeSource} />}
    />
    <Route
      path="/"
      render={() => <DropCountry changeCountry={props.changeCountry} />}
    />
  </nav>
);

export default Nav;

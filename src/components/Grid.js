/**
 * @Author: Ali
 * @Date:   2020-05-29T12:45:38+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-29T12:51:35+02:00
 */
import React from "react";
import { Route } from "react-router-dom";
import News from "./News/News";
import SideNews from "./News/SideNews";

const Grid = props => (
  <div className="row">
    <div className="col-sm-8">
      <Route
        exact
        path="/"
        render={() => (
          <News newSource={props.newSource} sourceName={props.sourceName} />
        )}
      />
    </div>
    <div className="col-sm-4">
      <Route
        exact
        path="/"
        render={() => (
          <SideNews newCountry={props.newCountry} country={props.country} />
        )}
      />
    </div>
  </div>
);

export default Grid;

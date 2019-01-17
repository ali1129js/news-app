/**
 * @Author: Ali
 * @Date:   2019-01-12T03:41:32+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-17T09:10:54+01:00
 */

import React, { Component } from "react";
import axios from "axios";
import SingleSide from "./SingleSide";
class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: []
    };
  }
  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(url)
      .then(res => {
        this.setState({
          sidenews: res.data.articles
        });
      })
      .catch(error => console.log(error));
  }
  componentDidUpdate(prevProps) {
    if (this.props.newCountry !== prevProps.newCountry) {
      const url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.newCountry
      }&apiKey=${process.env.REACT_APP_API_KEY}`;
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            sidenews: data.articles
          });
        })
        .catch(error => console.log(error));
    }
  }
  renderItem() {
    return this.state.sidenews.map(item => (
      <SingleSide key={item.title} item={item} />
    ));
  }

  render() {
    return (
      <div>
        <h2>
          {" "}
          Top headlines{" "}
          <span style={{ textTransform: "uppercase" }}>
            {" "}
            {this.props.newCountry}{" "}
          </span>
        </h2>
        <hr />
        {this.renderItem()}
      </div>
    );
  }
}
export default SideNews;

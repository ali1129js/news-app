/**
 * @Author: Ali
 * @Date:   2018-12-21T11:16:27+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-12T03:21:47+01:00
 */
/**
 * @Author: Ali
 * @Date:   2018-12-20T15:41:20+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-12T03:21:47+01:00
 */
import React, { Component } from "react";
import axios from "axios";
import SingleSide from "./SingleSide";
const API_KEY = "063bd9bcd1b847f9a6146f60d88e2808";
class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: []
    };
  }
  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${API_KEY}`;
    axios
      .get(url)
      .then(res => {
        this.setState({
          sidenews: res.data.articles
        });
      })
      .catch(error => console.log(error));
  }
  renderItem() {
    return this.state.sidenews.map(item => (
      <SingleSide key={item.title} item={item} />
    ));
  }

  render() {
    return (
      <div>
        <h2> Top headlines from Germany</h2>
        <hr />
        {this.renderItem()}
      </div>
    );
  }
}
export default SideNews;

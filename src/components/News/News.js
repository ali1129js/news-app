/**
 * @Author: Ali
 * @Date:   2018-12-20T15:41:20+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-26T11:18:49+02:00
 */
import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `https://newsapi.org/v2/top-headlines?sources=${
      this.props.sourceName
    }&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(proxy + url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          news: data.articles
        });
      })
      .catch(error => console.log(error));
  }
  componentDidUpdate(prevProps) {
    if (this.props.newSource !== prevProps.newSource) {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const url = `https://newsapi.org/v2/top-headlines?sources=${
        this.props.newSource
      }&apiKey=${process.env.REACT_APP_API_KEY}`;
      fetch(proxy + url)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            news: data.articles
          });
        })
        .catch(error => console.log(error));
    }
  }
  renderItem() {
    return this.state.news.map(item => (
      <NewSingle key={item.title} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.renderItem()}</div>;
  }
}
export default News;

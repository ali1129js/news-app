/**
 * @Author: Ali
 * @Date:   2018-12-20T15:41:20+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-21T05:46:38+01:00
 */
import React, { Component } from 'react'
import NewSingle from './NewSingle'

const API_KEY="063bd9bcd1b847f9a6146f60d88e2808"
class News extends Component {
  constructor(props){
    super(props)
    this.state = {
      news: []
    }
  }
  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?sources=bild&apiKey=${API_KEY}`
    fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      this.setState({
        news:data.articles
      })
    })
    .catch((error) => console.log(error))
  }
  renderItem() {
    return this.state.news.map((item) => (
      <NewSingle key={item.title} item={item} />
    ))
  }

  render(){
    return (
      <div className="row">
        {this.renderItem()}
      </div>
    )
  }
}
export default News

/**
 * @Author: Ali
 * @Date:   2018-12-20T15:41:20+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-20T16:35:58+01:00
 */
import React, { Component } from 'react'
import NewSingle from './NewSingle'

class News extends Component {
  constructor(props){
    super(props)
    this.state = {
      news: []
    }
  }
  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=063bd9bcd1b847f9a6146f60d88e2808'
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
      <NewSingle key={item.id} item={item} />
    ))
  }

  render(){
    return (
      <ul>
       {this.renderItem()}
      </ul>
    )
  }
}
export default News

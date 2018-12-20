/**
 * @Author: Ali
 * @Date:   2018-12-20T15:41:20+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-20T15:54:14+01:00
 */
import React, { Component } from 'react'
import NewSingle from './NewSingle'

class News extends Component {
  renderItem() {
    return this.props.items.map((item) => (
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

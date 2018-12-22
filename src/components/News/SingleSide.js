/**
 * @Author: Ali
 * @Date:   2018-12-21T21:57:49+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-22T09:38:37+01:00
 */
import React from 'react'

const SingleSide = ({item}) => (
  <div className="divider">
  <a href={item.url} target="_blank" rel="noopener noreferrer">
    <div className="section">
    <h5> {item.source.name} </h5>
    <p> {item.title} </p>
    </div>
  </a>
  <hr />
  </div>
)
export default SingleSide

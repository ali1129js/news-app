/**
 * @Author: Ali
 * @Date:   2018-12-20T15:43:23+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-12-21T06:11:44+01:00
 */
import React from 'react'

const NewSingle = ({item}) => (
 <div className="col col-lg-5"> 
   <div className="card">
     <img className="card-img-top"
       src={item.urlToImage}
       alt={item.title} />
     <div className="card-body">
       <h5 className="card-title">{item.title}</h5>
       <p className="card-text">{item.content}</p>
       <a href={item.url} className="btn btn-primary">Go to the Article</a>
     </div>
   </div>
 </div>
)
export default NewSingle

/**
 * @Author: Ali
 * @Date:   2018-12-20T15:43:23+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-04T16:40:19+01:00
 */
import React from "react";

const NewSingle = ({ item }) => (
  <div className="row">
    <div className="col-sm">
      <div
        className="card"
        style={{ marginBottom: "1rem", width: "23rem", marginLeft: "0.8rem" }}
      >
        <img className="card-img-top" src={item.urlToImage} alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.content}</p>
          <a
            href={item.url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Article
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default NewSingle;

/**
 * @Author: Ali
 * @Date:   2020-05-29T12:53:00+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-06-01T14:16:15+02:00
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewSingle from "./News/NewSingle";

const TagNav = props => {
  const [news, setNews] = useState([]);
  const [source, setSource] = useState("");

  const handleclick = e => {
    let value = e.target.value;
    setSource(value);
    renderItem();
  };
  const renderItem = () => {
    if (news.length === 0) {
      console.log(news);
    } else {
      return news.data.map(item => <NewSingle key={item.title} item={item} />);
    }
  };
  useEffect(
    () => {
      const url = `https://newsapi.org/v2/everything?q=${source}&apiKey=${
        process.env.REACT_APP_API_KEY
      }`;
      axios
        .get(url)
        .then(res => {
          setNews({ data: res.data.articles });
        })
        .catch(error => console.log(error));
    },
    [source]
  );
  return (
    <div className="newNavBar">
      <button
        onClick={handleclick}
        value={"apple"}
        className="btn btn-outline-danger m-2"
      >
        Apple News
      </button>
      <button
        onClick={handleclick}
        value={"amd"}
        className="btn btn-outline-danger m-2"
      >
        AMD News
      </button>
      <button
        onClick={handleclick}
        value={"intel"}
        className="btn btn-outline-danger m-2"
      >
        Intel News
      </button>
      <button
        onClick={handleclick}
        value={"bitcoin"}
        className="btn btn-outline-danger m-2"
      >
        Bitcoin News
      </button>

      <div className="row">{source && renderItem()}</div>
    </div>
  );
};

export default TagNav;

/**
 * @Author: Ali
 * @Date:   2020-05-29T12:53:00+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2020-05-30T12:45:31+02:00
 */
import React from "react";
import axios from "axios";

const TagNav = props => {
  const handleclick = e => {
    let value = e.target.value;
    console.log(value);
    //test
    const url = `https://newsapi.org/v2/top-headlines?country=${value}&apiKey=${
      process.env.REACT_APP_API_KEY
    }`;
    axios
      .get(url)
      .then(res => {
        console.log(res.data.articles);
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="newNavBar">
      <button
        onClick={handleclick}
        value={"us"}
        className="btn btn-outline-danger"
      >
        handleclick
      </button>
      <button onClick={props.changeSource} className="btn btn-outline-danger">
        Danger
      </button>
      <button onClick={props.changeSource} className="btn btn-outline-danger">
        Danger
      </button>
      <button onClick={props.changeSource} className="btn btn-outline-danger">
        Danger
      </button>
      <button onClick={props.changeSource} className="btn btn-outline-danger">
        Danger
      </button>
      <button onClick={props.changeSource} className="btn btn-outline-danger">
        Danger
      </button>
      <button onClick={props.changeSource} className="btn btn-outline-danger">
        Danger
      </button>
      <button onClick={props.changeSource} className="btn btn-outline-danger">
        Danger
      </button>
      <button onClick={props.changeSource} className="btn btn-outline-danger">
        Danger
      </button>
      <button onClick={props.changeSource} className="btn btn-outline-danger">
        Danger
      </button>
    </div>
  );
};

export default TagNav;

import React from "react";
import "./style.css";

function ResultList(props) {
  return (
    <div className="container">
      <p>Results</p>
       <div className="card">
      <h3>Title: {props.title}</h3>
      <h3>Authors: {props.author} </h3> 
      <button type="submit" className="btn btn-danger"><a href={props.link}>View</a></button>
      <button type="submit" className="btn btn-danger">Save</button>
      <div>
        <img className="img" alt={props.name} src={props.image} />
        <h3 className="description">Description: {props.description}</h3>
      </div>
      </div>
    </div>
  );
}

export default ResultList;



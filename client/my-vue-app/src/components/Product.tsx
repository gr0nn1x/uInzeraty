//import "./Article.css"
import * as React from "react";

export default function Article(props) {
  return (
    <>
      <img
        className="article-img"
        src={props.photo}
        alt={props.photo}
        title={props.photo}
      />
      <p>{props.postname}</p>
    </>
  );
}

import "./Product.css";
import * as React from "react";

export default function Product(props) {
  return (
    <>
      <img
        className="article-img"
        src={props.photo}
        alt={props.postname}
        title={props.postname}
      />
      <p>{props.postname}</p>
    </>
  );
}

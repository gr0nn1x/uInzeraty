import "./Product.css";
import * as React from "react";

export default function Product(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "blue",
          marginTop: 10,
          marginLeft: "1000px",
          height: "400px",
          width: "400px",
        }}
      >
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            width: "40%",
          }}
          className="article-img"
          src={props.photo}
          alt={props.postname}
          title={props.postname}
        />
        <div style={{ textAlign: "center" }}>{props.postname}</div>
      </div>
    </>
  );
}

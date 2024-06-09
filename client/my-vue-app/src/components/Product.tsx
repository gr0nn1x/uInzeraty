import { Box } from "@mui/material";
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
        <div>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            {props.postname}
          </p>
          <p style={{ color: "black" }}>{props.description}</p>
        </div>
        <Box sx={{
          color : "red",
          fontSize: "30px",
          marginTop: "98%",
          marginLeft: "90%",
          cursor: "pointer",
          userSelect: "none",
          transition: "0.2s ease",
          "&:hover" : {
            transform : "scale(1.6)"
            
          }
        }}>
          X
        </Box>
      </div>
    </>
  );
}

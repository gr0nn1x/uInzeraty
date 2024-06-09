import * as React from "react";
import { Box } from "@mui/material";
import "./Product.css";
import { useState } from "react";

export default function Product(props) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleToggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:3000/api/v1/post/${props.id}/checkPassword`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      }
    );

    const data = await res.json();

    if (res.status === 200 && data.match) {
      const deleteRes = await fetch(
        `http://localhost:3000/api/v1/post/${props.id}`,
        {
          method: "DELETE",
        }
      );

      if (deleteRes.status === 200) {
        window.location.reload();
      } else {
        setError("Failed to delete the post.");
      }
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div
      className="product-container"
      style={{
        backgroundColor: "grey  ",
        marginLeft: "300px",
        height: "700px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius:"40px"
      
      }}
    >
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          marginTop: "10%",
          height: "200px",
          objectFit: "cover",
          borderRadius:"40px"
        }}
        className="article-img"
        src={props.photo}
        alt={props.postname}
        title={props.postname}
      />
      <div>
        <p style={{ textAlign: "center", fontSize: "40px" }}>
          {props.postname}
        </p>
        <p style={{ color: "black" ,marginLeft:"40px",marginRight:"40px"}}>{props.description}</p>
        <p style={{ color: "yellow", textAlign: "center" }}>
          Kategorie: {props.category}
        </p>
      </div>
      <Box
        sx={{
          color: "red",
          fontSize: "30px",
          cursor: "pointer",
          userSelect: "none",
          transition: "0.2s ease",
          alignSelf: "center",
          "&:hover": {
            transform: "scale(1.6)",
          },
        }}
        onClick={handleToggleInput}
      >
        X
      </Box>
      {isInputVisible && (
        <>
          <input
            type="password"
            style={{
              marginTop: 10,
              padding: 5,
              fontSize: "16px",
              alignSelf: "center",
            }}
            placeholder="zadejte Heslo"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleDelete} style={{ marginTop: 10 }}>
            Delete Post
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
    </div>
  );
}

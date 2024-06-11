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
        position: "relative",
        overflow: "hidden",
        border: "5px solid black", 
        borderRadius: "40px",
        width: "400px",
        height: "500px",
        backgroundColor: "grey",
        marginLeft: "300px",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "40%",
          objectFit: "cover",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
        }}
        className="article-img"
        src={props.photo}
        alt={props.postname}
        title={props.postname}
      />
      <div
        style={{
          position: "absolute",
          top: "54%",
          left: "20px",
          width: "calc(100% - 40px)", 
          overflow: "hidden", 
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: "bold", maxWidth: "100%", overflowWrap: "break-word" }}>
          {props.postname.length > 56 ? props.postname.substr(0, 56) : props.postname}
        </p>
        <p style={{ color: "black", maxWidth: "100%", overflowWrap: "break-word" }}>
          {props.description}
        </p>
        <p style={{ color: "blue", maxWidth: "100%", overflowWrap: "break-word" }}>
          {props.price}
        </p>
        <p style={{ color: "yellow", maxWidth: "100%", overflowWrap: "break-word" }}>
          {props.contact}
        </p>
        <p style={{ color: "yellow", maxWidth: "100%", overflowWrap: "break-word" }}>Kategorie: {props.category}</p>
      </div>
      <Box
        sx={{
          color: "red",
          fontSize: "30px",
          cursor: "pointer",
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1,
          "&:hover": {
            transform: "scale(1.6)",
          },
        }}
        onClick={handleToggleInput}
      >
        X
      </Box>
      {isInputVisible && (
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <input
            type="password"
            style={{
              marginTop: 10,
              padding: 5,
              fontSize: "16px",
            }}
            placeholder="zadejte Heslo"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleDelete} style={{ marginTop: 10 }}>
            Delete Post
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

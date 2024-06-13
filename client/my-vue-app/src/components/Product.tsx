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
        setError("Nepodařilo se smazat inzerát.");
      }
    } else {
      setError("Špatné heslo.");
    }
  };

  return (
    <div
      style={{
        overflow: "hidden",
        border: "5px solid black", 
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        
      }}
    >
      <img
        style={{
          width: "100%",
          
        }}
        src={props.photo}
        alt={props.postname}
        title={props.postname}
      />
      <div
        style={{
          flexDirection: "column",
          overflow: "hidden", 
          justifyContent: "flex-start",
          paddingLeft: "5px",
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: "bold", maxWidth: "100%", overflowWrap: "break-word" }}>
          {props.postname.length > 56 ? props.postname.substr(0, 56) : props.postname}
        </p>
        <p style={{ color: "black", maxWidth: "100%", overflowWrap: "break-word" }}>
          {props.description}
        </p>
        <p style={{ color: "yellow", maxWidth: "100%", overflowWrap: "break-word" }}>Kategorie: {props.category}</p>
      </div>
      <Box
        sx={{
          color: "red",
          fontSize: "30px",
          cursor: "pointer",
          paddingLeft: "5px",
          width: "5%",
          "&:hover": {
            transform: "scale(1.2)",
            
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
            Smazat inzerát
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

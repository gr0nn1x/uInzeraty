import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <p>
        <Link to="/post">Ahojky</Link>
        <Link to="/post">Create Post</Link>
      </p>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <p>
        <Link to="/post">Ahojky</Link>
        <Link to="/createpost">Create Post</Link>
      </p>
    </>
  );
}

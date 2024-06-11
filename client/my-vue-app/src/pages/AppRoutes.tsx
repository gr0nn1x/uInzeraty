import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import CreatePost from "./CreatePost/CreatePost";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

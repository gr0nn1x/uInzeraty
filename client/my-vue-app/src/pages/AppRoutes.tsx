import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";
import MyPosts from "./MyPosts/MyPosts";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route path="/myposts" element={<MyPosts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

import { NextFunction, Request, Response } from "express";
import { genSalt, hash } from "bcrypt";
import db from "../models/index";
const Posting = db.posts;
const Post = require("../models/post");
const imageController = require("./image.js");

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts: any = await Posting.findAll();
    if (!posts || posts.length === 0)
      return res.status(500).send({ message: "Posts not found" });
    return res.status(200).send({ message: "Posts found", payload: posts });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
export const getPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "Missing details!" });
    const post: any = await Posting.findOne({ where: { id: id } });
    if (!post) return res.status(500).send({ message: "Post not found" });
    return res.status(200).send({ message: "Post found", payload: { post } });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
export const createPost = async (req: Request, res: Response) => {
  try {
    const { email, postname, password, photo } = req.body;
    if (!email || !password || !postname)
      return res.status(400).send({ message: "Missing details!" });
    const post: any = await Posting.findOne({ where: { email: email } });
    if (post) return res.status(400).send({ message: "Post already exists" });
    const salt = await genSalt(10);
    const hashedString = await hash(password, salt);
    const createdPost = await Posting.create({
      photo: photo,
      email: email,
      postname: postname,
      password: hashedString,
    });
    return res.status(201).send({ message: "Post created" });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data)
      return res.status(400).send({ message: "Missing details!" });
    const post: any = await Posting.findOne({ where: { id: id } });
    if (!post) return res.status(500).send({ message: "Post not found" });
    for (const ops of data) {
      post[ops.propName] = ops.value;
    }
    const action = await post.save();
    if (!action)
      return res.status(500).send({ message: "Something went wrong!" });
    return res.status(200).send({ message: "Post updated", payload: post });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "Missing details!" });
    const post: any = await Posting.destroy({ where: { id: id } });
    if (!post) return res.status(500).send({ message: "Post not found" });
    return res.status(200).send({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

const uploadFile = imageController.upload.single("photo");

const saveFileIntoFolder = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  uploadFile(req, res, (err: Error) => {
    if (err) {
      console.log(err);
      console.log("error while uploading file");
      return res.status(500).send(err);
    }
    console.log("File uploaded");
    next();
  });
};

const saveIntoDb = async (req: Request, res: Response) => {
  try {
    const upload = new Post({
      name: req.body.photo,
      imagePath:
        `http://localhost:3000/api/v${process.env.API_VER}/img` +
        req.body.postname,
    });
    const result = await upload.save();
    if (result) {
      return res.status(201).json({
        msg: "Upload created!",
        payload: result,
      });
    }
    res.status(500).json({ msg: "Upload failed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

exports.postUpload = [saveFileIntoFolder, saveIntoDb];

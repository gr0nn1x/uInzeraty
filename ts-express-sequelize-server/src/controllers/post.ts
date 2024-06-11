import { NextFunction, Request, Response } from "express";
import { genSalt, hash, compare } from "bcrypt";
import db from "../models/index";
const Posting = db.posts;
const Post = require("../models/post");
const imageController = require("../controllers/image");

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
    const { description, postname, password, photo, category, price, contact } = req.body;
    if (!description || !password || !postname || !category || !price || !contact || !photo)
      return res.status(400).send({ message: "Missing details!" });
    const post: any = await Posting.findOne({ where: { description: description } });
    if (post) return res.status(400).send({ message: "Post already exists" });
    const salt = await genSalt(10);
    const hashedString = await hash(password, salt);
    const createdPost = await Posting.create({
      photo: "http://localhost:3000/img/" + req.file?.filename,
      description: description,
      postname: postname,
      category: category,
      password: hashedString,
      price: price,
      contact: contact,
    });
    return res.status(201).send({ message: "Post created" });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

export const checkPassword = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    if (!id || !password) return res.status(400).send({ message: "Missing details!" });

    const post: any = await Posting.findOne({ where: { id: id } });

    if (!post) return res.status(500).send({ message: "Post not found" });

    const match = await compare(password, post.password);

    if (match) {
      res.status(200).send({ match: true });
    } else {
      res.status(401).send({ match: false });
    }
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

export const postUpload = [saveFileIntoFolder, createPost];

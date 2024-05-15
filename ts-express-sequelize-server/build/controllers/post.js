"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
const bcrypt_1 = require("bcrypt");
const index_1 = __importDefault(require("../models/index"));
const Posting = index_1.default.posts;
const Post = require("../models/post");
const imageController = require("../controllers/image");
const getAllPosts = async (req, res) => {
    try {
        const posts = await Posting.findAll();
        if (!posts || posts.length === 0)
            return res.status(500).send({ message: "Posts not found" });
        return res.status(200).send({ message: "Posts found", payload: posts });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.getAllPosts = getAllPosts;
const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "Missing details!" });
        const post = await Posting.findOne({ where: { id: id } });
        if (!post)
            return res.status(500).send({ message: "Post not found" });
        return res.status(200).send({ message: "Post found", payload: { post } });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.getPostById = getPostById;
const createPost = async (req, res) => {
    try {
        const { email, postname, password, photo } = req.body;
        if (!email || !password || !postname)
            return res.status(400).send({ message: "Missing details!" });
        const post = await Posting.findOne({ where: { email: email } });
        if (post)
            return res.status(400).send({ message: "Post already exists" });
        const salt = await (0, bcrypt_1.genSalt)(10);
        const hashedString = await (0, bcrypt_1.hash)(password, salt);
        const createdPost = await Posting.create({
            photo: photo,
            email: email,
            postname: postname,
            password: hashedString,
        });
        return res.status(201).send({ message: "Post created" });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.createPost = createPost;
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || !data)
            return res.status(400).send({ message: "Missing details!" });
        const post = await Posting.findOne({ where: { id: id } });
        if (!post)
            return res.status(500).send({ message: "Post not found" });
        for (const ops of data) {
            post[ops.propName] = ops.value;
        }
        const action = await post.save();
        if (!action)
            return res.status(500).send({ message: "Something went wrong!" });
        return res.status(200).send({ message: "Post updated", payload: post });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.updatePost = updatePost;
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "Missing details!" });
        const post = await Posting.destroy({ where: { id: id } });
        if (!post)
            return res.status(500).send({ message: "Post not found" });
        return res.status(200).send({ message: "Post deleted" });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.deletePost = deletePost;
const uploadFile = imageController.upload.single("photo");
const saveFileIntoFolder = (req, res, next) => {
    uploadFile(req, res, (err) => {
        if (err) {
            console.log(err);
            console.log("error while uploading file");
            return res.status(500).send(err);
        }
        console.log("File uploaded");
        next();
    });
};
const saveIntoDb = async (req, res) => {
    try {
        const upload = new Post({
            name: req.body.photo,
            imagePath: `http://localhost:3000/api/v${process.env.API_VER}/img` +
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
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error,
        });
    }
};
exports.postUpload = [saveFileIntoFolder, saveIntoDb];

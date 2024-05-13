"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
const bcrypt_1 = require("bcrypt");
const index_1 = __importDefault(require("../models/index"));
const Post = index_1.default.posts;
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
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
        const post = await Post.findOne({ where: { id: id } });
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
        const { email, postname, password } = req.body;
        if (!email || !password || !postname)
            return res.status(400).send({ message: "Missing details!" });
        const post = await Post.findOne({ where: { email: email } });
        if (post)
            return res.status(400).send({ message: "Post already exists" });
        const salt = await (0, bcrypt_1.genSalt)(10);
        const hashedString = await (0, bcrypt_1.hash)(password, salt);
        const createdPost = await Post.create({
            email: email,
            postname: postname,
            password: hashedString,
        });
        return res.status(200).send({ message: "Post created" });
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
        const post = await Post.findOne({ where: { id: id } });
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
        const post = await Post.destroy({ where: { id: id } });
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

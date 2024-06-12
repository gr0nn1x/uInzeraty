"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpload = exports.deletePost = exports.updatePost = exports.checkPassword = exports.createPost = exports.getPostById = exports.getAllPosts = void 0;
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
            return res.status(400).send({ message: "Missing details! 1" });
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
        console.log(req.body);
        const { description, postname, password, photo, /* price, contact*/ } = req.body;
        if (!description || !password || !postname || !photo /*|| !price || !contact*/)
            return res.status(400).send({ message: "Missing details! 2" });
        const post = await Posting.findOne({ where: { description: description } });
        if (post)
            return res.status(400).send({ message: "Post already exists" });
        const salt = await (0, bcrypt_1.genSalt)(10);
        const hashedString = await (0, bcrypt_1.hash)(password, salt);
        const createdPost = await Posting.create({
            photo: "http://localhost:3000/img/" + req.file?.filename,
            description: description,
            postname: postname,
            password: hashedString,
            /*price: price,
            contact: contact,*/
        });
        return res.status(201).send({ message: "Post created" });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.createPost = createPost;
const checkPassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;
        if (!id || !password)
            return res.status(400).send({ message: "Missing details! 3" });
        const post = await Posting.findOne({ where: { id: id } });
        if (!post)
            return res.status(500).send({ message: "Post not found" });
        const match = await (0, bcrypt_1.compare)(password, post.password);
        if (match) {
            res.status(200).send({ match: true });
        }
        else {
            res.status(401).send({ match: false });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.checkPassword = checkPassword;
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || !data)
            return res.status(400).send({ message: "Missing details! 4" });
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
            return res.status(400).send({ message: "Missing details! 5" });
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
exports.postUpload = [saveFileIntoFolder, exports.createPost];

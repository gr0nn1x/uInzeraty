import express from "express";
const router = express.Router();

import * as postController from "../controllers/post";

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.post("/", postController.postUpload);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;

import express from "express";
import upload from "../middleware/upload.js";
import { PostNumber, createPost, getAllPosts } from "../controllers/postController.js";
import { createComment, getCommentsByPost } from "../controllers/commentController.js";
import { toggleLike, getLikesByPost } from "../controllers/likeController.js";
import protectedRoute from "../middleware/protectedRoute.js";
const router = express.Router();

router.get("/postNumber", PostNumber);
router.post("/createPost", upload.single("image"), createPost);
router.get("/getAllPosts", getAllPosts);
router.post("/:postId/comments", createComment);
router.get("/:postId/comments", getCommentsByPost);
router.post("/:postId/likes", toggleLike);
router.get("/:postId/likes", getLikesByPost);

export default router;
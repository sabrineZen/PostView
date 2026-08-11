import express from "express";
import { PostNumber } from "../controllers/PostController.js";
import upload from "../middleware/upload.js";
import { createPost, getAllPosts } from "../controllers/PostController.js";
const router=express.Router();
router.get("/postNumber",PostNumber);
router.post("/createPost",upload.single("image"),createPost);
router.get("/getAllPosts",getAllPosts);
export default router;
import Register from "../controllers/authController.js"
import express from "express";
const router=express.Router();
router.post("/register",Register)
export default router;
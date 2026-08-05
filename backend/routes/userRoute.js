import express from "express";
import {getNumberOfUsers} from "../controllers/userController.js";

const router=express.Router();
router.get("/number",getNumberOfUsers);
export default router;
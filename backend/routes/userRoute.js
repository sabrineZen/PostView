import express from "express";
import {getNumberOfUsers,getUserNameById} from "../controllers/userController.js";

const router=express.Router();
router.get("/number",getNumberOfUsers);
router.get("/name/:id",getUserNameById);
export default router;
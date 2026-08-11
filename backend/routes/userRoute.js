import express from "express";
import {getNumberOfUsers,getUserNameById,getAllUsers} from "../controllers/userController.js";

const router=express.Router();
router.get("/number",getNumberOfUsers);
router.get("/name/:id",getUserNameById);
router.get("/all",getAllUsers);
export default router;
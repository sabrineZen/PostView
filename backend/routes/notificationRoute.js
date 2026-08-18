import express from "express";
import { getNotificationsByUser } from "../controllers/notificationController.js";

const router = express.Router();

router.get("/:utilisateurId", getNotificationsByUser);

export default router;

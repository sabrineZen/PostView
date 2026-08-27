import express from "express";
import { getNotificationsByUser } from "../controllers/notificationController.js";
import protectedRoute from "../middleware/protectedRoute.js";
const router = express.Router();

router.get("/:utilisateurId", protectedRoute, getNotificationsByUser);

export default router;

import express from "express";
import { createProfileVisit, getNumberOfVisitsProfil } from "../controllers/profilVisitController.js";
import protectedRoute from "../middleware/protectedRoute.js";
const router = express.Router();
router.post("/", createProfileVisit);
router.get("/:utilisateurId",getNumberOfVisitsProfil);
export default router;
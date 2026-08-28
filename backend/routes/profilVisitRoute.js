import express from "express";
import { createProfileVisit, getNumberOfVisitsProfil } from "../controllers/profilVisitController.js";
const router = express.Router();
router.post("/", createProfileVisit);
router.get("/:utilisateurId",getNumberOfVisitsProfil);
export default router;
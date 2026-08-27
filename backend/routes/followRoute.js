import express from "express";
import protectedRoute from "../middleware/protectedRoute.js";
import {
	followUser,
	unfollowUser,
	getFollowers,
	getFollowing,
	getNumberOfFollowers,
	getNumberOfFollowing,
} from "../controllers/followController.js";
const router=express.Router();

router.post("/follow", followUser);
router.post("/unfollow", unfollowUser);
router.get("/followers/count/:userId", getNumberOfFollowers);
router.get("/following/count/:userId", getNumberOfFollowing);
router.get("/followers/:userId", getFollowers);
router.get("/following/:userId", getFollowing);

export default router;
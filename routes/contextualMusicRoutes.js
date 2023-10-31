const express = require("express");
const { allWeather, allMood, allActivity, allGender, contextualPlaylist ,getPlaylist} = require("../controllers/contextualMusicController");
const { verifyToken } = require("../middlewares/validators/tokenvalidator");

const router = express.Router();

router.get("/activity", verifyToken, allActivity);
router.get("/weather", verifyToken, allWeather);
router.get("/mood", verifyToken, allMood);
router.get("/gender", verifyToken, allGender);
router.post("/contextualPlaylist", verifyToken, contextualPlaylist);
router.get("/playlist", verifyToken, getPlaylist);

module.exports = router;

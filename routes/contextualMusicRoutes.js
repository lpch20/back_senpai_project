const express = require("express");
const { allWeather, allMood, allActivity, allGender, contextualPlaylist} = require("../controllers/contextualMusicController");
const { verifyToken } = require("../middlewares/validators/tokenvalidator");

const router = express.Router();

router.get("/activity", allActivity);
router.get("/weather", allWeather);
router.get("/mood", allMood);
router.get("/gender", allGender);
router.post("/contextualPlaylist", verifyToken, contextualPlaylist);

module.exports = router;

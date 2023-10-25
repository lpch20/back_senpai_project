const express = require("express");
const { allWeather, allMood, allActivity, allGender} = require("../controllers/contextualMusicController");

const router = express.Router();

router.get("/activity", allActivity);
router.get("/weather", allWeather);
router.get("/mood", allMood);
router.get("/gender", allGender);

module.exports = router;

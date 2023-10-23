const express = require("express");
const { topTwenty, allSongs } = require("../controllers/songsControllers");

const router = express.Router();

router.get("/songs", allSongs);
router.get("/top20", topTwenty);

module.exports = router;

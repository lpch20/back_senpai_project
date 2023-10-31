const express = require("express");
const { topTwenty, allSongs } = require("../controllers/songsControllers");
const { verifyToken } = require("../middlewares/validators/tokenvalidator");

const router = express.Router();

router.get("/songs", verifyToken, allSongs);
router.get("/top20",verifyToken, topTwenty);

module.exports = router;

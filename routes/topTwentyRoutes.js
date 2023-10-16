const express = require("express");
const { topTwenty } = require("../controllers/topTwentyControllers");

const router = express.Router();

router.get("/top20", topTwenty);

module.exports = router;

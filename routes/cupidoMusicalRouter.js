const express = require("express");
const { cupidoPlaylist } = require("../controllers/cupidoMusicalController");
const { verifyToken } = require("../middlewares/validators/tokenvalidator");


const router = express.Router();

router.post("/cupidoPlaylist", verifyToken, cupidoPlaylist)

module.exports = router;
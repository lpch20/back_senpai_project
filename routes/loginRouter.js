const express = require("express");
const { loginMail, loginUser, loginPassword } = require("../controllers/loginController");

const router = express.Router();

router.get("/verifyDataMail", loginMail)
router.get("/verifyDataUser", loginUser)
router.post("/verifyDataPassword", loginPassword)

module.exports = router;
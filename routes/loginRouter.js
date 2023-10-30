const express = require("express");
const {
  loginMail,
  loginUser,
  loginPassword,
  userData,
} = require("../controllers/loginController");

const router = express.Router();

router.get("/verifyDataMail", loginMail);
router.get("/verifyDataUser", loginUser);
router.post("/verifyDataPassword", loginPassword);
router.get("/dataUser", userData);

module.exports = router;

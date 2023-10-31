const express = require("express");
const {
  loginMail,
  loginUser,
  loginPassword,
  userData,
  userName,
} = require("../controllers/loginController");
const { verifyToken } = require("../middlewares/validators/tokenvalidator");

const router = express.Router();

router.get("/verifyDataMail", loginMail);
router.get("/verifyDataUser", loginUser);
router.post("/verifyDataPassword", loginPassword);
router.get("/dataUser", verifyToken, userData);


module.exports = router;

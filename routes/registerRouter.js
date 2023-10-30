const express = require("express");
const {
  userAdd,
  verifyMail,
  verifyUser,
} = require("../controllers/registerController");
const { runValidation } = require("../middlewares/validators/indexvalidator");
const {
  validatorMail,
  username,
  password,
} = require("../middlewares/validators/registerValidator");

const router = express.Router();

router.get("/verifymail", validatorMail, runValidation, verifyMail);
router.get("/verifyuser", runValidation, verifyUser);
router.post("/adduser", username, password, runValidation, userAdd);

module.exports = router;

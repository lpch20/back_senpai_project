const express = require("express");
const { emailAdd } = require("../controllers/emailRegisterController");
const { runValidation } = require("../middlewares/validators/indexvalidator");
const validatorMail = require("../middlewares/validators/mailValidator");

const router = express.Router();

router.post('/emailAdd', validatorMail, runValidation, emailAdd)

module.exports = router;
const { check, param, query } = require("express-validator");

const validatorMail = [
  query("email")
    .not()
    .isEmpty()
    .withMessage("El email es un campo requerido")
    .isEmail()
    .withMessage("El correo electrónico no es válido"),
];

const password = [
  check("password")
    .not()
    .isEmpty()
    .withMessage("La contraseña es un campo requerido")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/)
    .withMessage(
      "La contraseña debe contener al menos un número, una letra mayúscula y un carácter especial"
    ),
];

const username = [
  check("username")
    .not()
    .isEmpty()
    .withMessage("El nombre de usuario es un campo requerido")
];
module.exports = { validatorMail, password, username };

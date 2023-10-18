const { check, param, query } = require("express-validator");

const validatorMail = [
    check("mail")
        .not()
        .isEmpty()
        .withMessage("Titulo es un campo requerido")
        .isEmail()
        .withMessage('El correo electrónico no es válido'),
];

module.exports = validatorMail

const knex = require("../config/knexfile");
const bcrypt = require("bcryptjs");

exports.verifyMail = async (req, res) => {
  const emailValue = req.query.email;
  try {
    const validationMail = await knex("public.users")
      .select("email")
      .where("email", emailValue)
      .first();

    if (validationMail) {
      res.status(400).json({ error: "Ya existe un registro con ese email" });
    } else {
      res
        .status(200)
        .json({
          message: "Email no existe en la base de datos. Puede ser insertado.",
        });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al verificar el email", error });
  }
};

exports.verifyUser = async (req, res) => {
  const userValue = req.query.username;
  try {
    const validationMail = await knex("public.users")
      .select("username")
      .where("username", userValue)
      .first();

    if (validationMail) {
      res.status(400).json({ error: "Ya existe un registro con ese usuario" });
    } else {
      res
        .status(200)
        .json({
          message: "Email no existe en la base de datos. Puede ser insertado.",
        });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al verificar el email", error });
  }
};

exports.userAdd = async (req, res) => {
  const { email, username, password } = req.body;
  console.log(email, username, password);

  const salt = await bcrypt.genSalt(10)
  console.log(salt)

  const passwordEncrypted = await bcrypt.hash(password, salt)

  try {
    const validation = await knex("public.users")
      .select("email", "username", "password")
      .where({ email: email, password: password, username: username })
      .first();

    if (validation) {
      res.status(400).json({ error: "Ya existe un usuario con esos datos" });
      return;
    }

    await knex("public.users").insert({
      email: email,
      password: passwordEncrypted,
      username: username,
    });

    res
      .status(200)
      .json({ message: "Usuario ingresado en la base de datos" });
  } catch (error) {
    res.status(500).json({ message: "Error al insertar el email", error });
  }
};

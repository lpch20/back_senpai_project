const knex = require("../config/knexfile");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  const userValue = req.query.username;
  try {
    const validationUser = await knex("public.users")
      .select("username")
      .where("username", userValue)
      .first();

    if (validationUser) {
      res.status(200).json({
        message: "Usuario encontrado, accediendo al sitio....",
      });
    } else {
      res.status(400).json({
        error:
          "No existe el usuario con el que\nquiere ingresar, porfavor registrate",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al ingresar", error });
  }
};

exports.loginMail = async (req, res) => {
  const emailValue = req.query.email;
  try {
    const validationMail = await knex("public.users")
      .select("email")
      .where("email", emailValue)
      .first();

    if (validationMail) {
      res.status(200).json({
        message: "Email encontrado, accediendo al sitio....",
      });
    } else {
      res.status(400).json({
        error:
          "No existe el email con el que quiere ingresar, porfavor registrate",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al ingresar", error });
  }
};

exports.loginPassword = async (req, res) => {
  const { password, username, email } = req.body;

  let user;

  try {
    if (email === undefined) {
      user = await knex("public.users")
        .where("username", username)
        .select("*")
        .first();
    } else {
      user = await knex("public.users")
        .where("email", email)
        .select("*")
        .first();
    }

    if (!user) {
      res.status(400).json({
        error: "Usuario no encontrado, por favor regístrese",
      });
      return;
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      res.status(400).json({
        error: "Contraseña incorrecta",
      });
      return;
    }

    console.log("holaaaa", user);

    const token = jsonwebtoken.sign(
      {
        id_user: user.id_user,
        username: user.username,
      },
      "mi firma"
    );

    res.status(200).json({ message: "Acceso correcto", token: token });
  } catch (error) {
    res.status(500).json({ message: "Error al ingresar", error });
  }
};

exports.userData = async (req, res) => {
  const user_id = req.user.id_user;
  const username = req.user.username;
  try {
    const playlistNames = await knex("playlist")
      .select("name")
      .where("user_id", user_id);

    const playlistNamesArray = playlistNames.map((playlist) => playlist.name);

    res.status(200).json({ playlistNames: playlistNamesArray, username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

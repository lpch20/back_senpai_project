const knex = require("../config/knexfile");

exports.emailAdd = async (req, res) => {
  const email = req.body;
  try {
    const validationEmail = await knex("users")
      .select("email")
      .where("email", email)
      .first();

    if (validationEmail) {
      res.status(400).json({ error: "Ya existe un registro con ese email" });
      return;
    }

    await knex("users").insert({ email: email });
    res
      .status(200)
      .json({ message: "Email insertado en base de datos correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al insertar el email" });
  }
};

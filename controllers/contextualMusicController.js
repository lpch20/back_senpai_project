const knex = require("../config/knexfile");

exports.allActivity = async (req, res) => {
  try {
    const activitysDb = await knex("activity").select("activity.type as type");

    res.status(200).json(activitysDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.allWeather = async (req, res) => {
  try {
    const weathersDb = await knex("weather").select("weather.type as type");

    res.status(200).json(weathersDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.allMood = async (req, res) => {
  try {
    const moodsDb = await knex("mood").select("mood.type as type");

    res.status(200).json(moodsDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.allGender = async (req, res) => {
  try {
    const genderDb = await knex("gender").select("gender.type as type");

    res.status(200).json(genderDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

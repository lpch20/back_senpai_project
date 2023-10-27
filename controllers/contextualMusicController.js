const knex = require("../config/knexfile");

exports.allActivity = async (req, res) => {
  try {
    const activitysDb = await knex("activity").select("*");

    res.status(200).json(activitysDb);
    console.log(res)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.allWeather = async (req, res) => {
  try {
    const weathersDb = await knex("weather").select("*");

    res.status(200).json(weathersDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.allMood = async (req, res) => {
  try {
    const moodsDb = await knex("mood").select("*");

    res.status(200).json(moodsDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.allGender = async (req, res) => {
  try {
    const genderDb = await knex("gender").select("*");

    res.status(200).json(genderDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.contextualPlaylist = async (req, res) => {
  const dataTosend = req.body;

  console.log(dataTosend)
  try {
    const playlist = await knex("songs").select("id_song")
    .where('mood', mood.id_mood)
    // .where('weather', weather.id_weather)
    // .where('activity', activity.id_activity)
    // .where('gender', gender.id_gender)

    // if (!playlist) {
    //   res.status(400).json({
    //     error: "Playlist no encontrada",
    //   });
    //   return;
    // }

    await knex("songs_playlist").insert({
      songs_id_song: playlist.id_song
    })

  //   await knex("public.usuarios").insert({
  //     email: email,
  //     username: username,
  //     password: passwordEncrypted 
  //  })

    res.status(200).json({message: "playlist creada"})
  } catch (error) {
    res.status(400).json({error: "Error en crear playlist", error})
  }
};

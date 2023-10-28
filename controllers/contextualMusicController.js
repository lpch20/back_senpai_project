const knex = require("../config/knexfile");

exports.allActivity = async (req, res) => {
  try {
    const activitysDb = await knex("activity").select("*");

    res.status(200).json(activitysDb);
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
  const { mood, weather, activity, gender } = req.body;


  try {
    const playlistSong = await knex("songs")
      .select("id_song")
      .orWhere("mood_id", mood)
      .orWhere("weather_id", weather)
      .orWhere("activity_id", activity)
      .whereIn("gender_id", gender);

      console.log(req.user)

    const playlistInsert = await knex("playlist").insert({
      name: mood,
      user_id: req.user.id_user
    })
    .returning('id_playlist');

    const playlistId = playlistInsert[0].id_playlist

    for (const song of playlistSong) {
      await knex("songs_playlist").insert({
        songs_id_song: song.id_song,
        playlist_id_playlist: playlistId 
      });
    }

    res.status(200).json({ message: "playlist creada" });
  } catch (error) {
    res.status(500).json({ error: "Error en crear playlist", message: error.message });
  }
};

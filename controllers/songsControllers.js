const knex = require("../config/knexfile");

exports.allSongs = async (req, res) => {
  try {
    const songsDb = await knex("songs")
      .select(
        "id_song",
        "songs.name as name",
        "songs.artist_id as artist_id",
        "artist.name as artist"
      )
      .innerJoin("artist", "songs.artist_id", "artist.id_artist");
    res.status(200).json(songsDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.topTwenty = async (req, res) => {
  try {
    const top20 = await knex("songs")
      .select(
        "songs.name as name",
        "artist.name as artist",
        "artist.id_artist as artist_id"
      )
      .innerJoin("artist", "songs.artist_id", "artist.id_artist")
      .orderBy("id_song")
      .limit(20);
    res.status(200).json(top20);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

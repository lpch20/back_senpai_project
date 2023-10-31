const knex = require("../config/knexfile");

exports.cupidoPlaylist = async (req, res) => {
    const  dataToSend  = req.body;
    const username = req.user.username
    try {
      const playlistSong = await knex("songs")
        .select("id_song")
        .whereIn("id_song", dataToSend);
  
      const playlistInsert = await knex("playlist").insert({
        name: "Cupido Playlist de " + username,
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
  
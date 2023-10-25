const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const songs = require("./routes/songsRoutes");
const register = require("./routes/registerRouter");
const weather = require("./routes/contextualMusicRoutes");
const mood = require("./routes/contextualMusicRoutes");
const activity = require("./routes/contextualMusicRoutes");


app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); // para conectar localhost de front y back

app.use("/api", songs);
app.use("/api", register);
app.use("/api", mood);
app.use("/api", activity);
app.use("/api", weather);



app.get("/api/*", (req, res) => {
  res
    .status(404) // mensaje de error solamente por si se pone mal la URL
    .json({
      error:
        "el recurso que quiere consumir no existe, revise los datos de la url",
    });
});

//---------------- LEVANTAMOS EL SERVIDOR EN EL PUERTO 8000-----------------

app.listen(8000, () => {
  console.log(`servidor levantado y escuchando en el puerto 8000`); // las backtics sirven para poder llamar otros archivos
});

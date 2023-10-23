const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const topTwenty = require("./routes/topTwentyRoutes");
const register = require("./routes/registerRouter");


app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); // para conectar localhost de front y back

app.use("/api", topTwenty);
app.use("/api", register);


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

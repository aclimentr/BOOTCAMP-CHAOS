const express = require('express');
const { connectDb } = require("./src/utils/database");
const routerMovies = require("./src/api/routes/movieRoutes");

const app = express();

// Estas configuraciones nos sirven para recibir objetos de tipo json.
app.use(express.json());

connectDb();

app.use("/student", routerStudent);

const PORT = 5051;
app.listen(PORT, () => {
  console.log('Escuchando por el puerto ' + PORT);
});
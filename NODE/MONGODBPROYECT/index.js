const express = require('express');
const { connectDb } = require("./src/utils/database");
const app = express();

app.use(express.json());


connectDb()

const PORT = 5053;
app.listen(PORT, ()=> {
    console.log('escuchando por el puerto' + PORT);
});
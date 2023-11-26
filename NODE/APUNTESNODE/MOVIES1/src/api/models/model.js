const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: { type: String, require: true },
    director: { type: String, require: true },
    year: { type: Number },
    genre: { type: String, require: true }
}, {
    collection: "movies"
});

//Tipos de datos: string, number, array, date, mixed, boolean, ObjectId

const movies = mongoose.model("movie", movieSchema)
module.exports = movies;
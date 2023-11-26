const Movies  = require("../models/model");

const getMovies = async (req, res) => {
    try {
        const movie = await Movies.find();
        return res.status(200).json(movie)

    } catch (error) {
        return res.status(404).json(error)
    }
};

module.exports = {getMovies}


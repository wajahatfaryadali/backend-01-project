const express = require("express");
const {
  getAllMoviesController,
} = require("../controllers/movie.controllers.js");

const movieRoutes = express.Router();

movieRoutes.get("/", getAllMoviesController);

module.exports = movieRoutes;

// const express = require("express");
import express from "express"
import { getAllMoviesController } from "../controllers/movie.controllers.js"

// const {
//   getAllMoviesController,
// } = require("../controllers/movie.controllers.js");

const movieRoutes = express.Router();

movieRoutes.get("/", getAllMoviesController);

// module.exports = movieRoutes;
export default movieRoutes

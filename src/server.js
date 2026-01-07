// const { configDotenv } = require("dotenv");
import { configDotenv } from "dotenv";
import movieRoutes from "./routes/movie.routes.js";
import { connectDB } from "./config/db.js";
import express from "express";

// const express = require("express");

// const movieRoutes = require("./routes/movie.routes.js");
// const { connectDB } = require("./config/db.js");

configDotenv();

// creating app
const app = express();

const PORT = process.env.PORT || 4001;

connectDB()

// json middleware
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ message: "duck you" });
});

// movies routes
app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

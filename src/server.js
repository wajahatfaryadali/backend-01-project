// const { configDotenv } = require("dotenv");
import express from "express";
import { configDotenv } from "dotenv";
import { connectDB } from "./config/db.js";

import movieRoutes from "./routes/movie.routes.js";
import authRoutes from "./routes/auth.routes.js";
import watchListRoutes from "./routes/watchlist.routes.js";

// const express = require("express");

// const movieRoutes = require("./routes/movie.routes.js");
// const { connectDB } = require("./config/db.js");

configDotenv();

// creating app
const app = express();

const PORT = process.env.PORT || 4001;

connectDB();

// json parsing middleware
app.use(express.json());
// url encoded parsing middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.json({ message: "duck you" });
});

// auth routes
app.use("/api/v1/auth", authRoutes);

// movies routes
app.use("/api/v1/movies", movieRoutes);

// watch list router
app.use("/api/v1/watchList", watchListRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

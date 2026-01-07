const { configDotenv } = require("dotenv");
const express = require("express");

const movieRoutes = require("./routes/movie.routes.js");

configDotenv();

const app = express();
const PORT = process.env.PORT || 4001;

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

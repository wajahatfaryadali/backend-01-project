const { configDotenv } = require("dotenv");
const express = require("express");

configDotenv();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

const getAllMoviesController = (req, res) => {
  res.json({ message: "get all movies", data: [] });
};

module.exports = { getAllMoviesController };

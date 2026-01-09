import { prisma } from "../config/db.js";

export const getAllMoviesController = async (req, res) => {
  try {
    const movies = await prisma.movie.findMany({});
    res.status(200).json({ message: "get all movies", data: movies || [] });
  } catch (error) {
    console.log("error getting movies *** ", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

// module.exports = { getAllMoviesController };

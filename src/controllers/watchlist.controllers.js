import { prisma } from "../config/db.js";

export const getWatchListController = async (req, res) => {
  const watchList = await prisma.watchlist.findMany();
  try {
    res.status(200).json({ message: "success", data: watchList });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", data: error });
  }
};

export const addToWatchListController = async (req, res) => {
  try {
    const { userID, movieID, status, rating, notes } = req.body;

    const isUserValid = await prisma.user.findUnique({ where: { id: userID } });

    if (!isUserValid) {
      return res.status(401).json({ message: "Unauthorized!", data: null });
    }

    const isMovieValid = await prisma.movie.findUnique({
      where: { id: movieID },
    });

    if (!isMovieValid) {
      return res.status(404).json({ message: "Movie Not Found!", data: null });
    }

    const isAlreadyExists = await prisma.watchlist.findUnique({
      // where: { id: movieID },
      where: {
        userID_movieID: {
          userID: userID,
          movieID: movieID,
        },
      },
    });

    if (isAlreadyExists) {
      return res
        .status(409)
        .json({ message: "Movie Already in watch list!", data: null });
    }

    const watchListItem = await prisma.watchlist.create({
      data: {
        userID,
        movieID,
        status: status || "planned",
        rating: rating || 0,
        notes: notes || "",
      },
    });

    res
      .status(200)
      .json({ message: "Movie Added To Watch List", data: watchListItem });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", data: error });
  }
};

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

export const removeFromWatchList = async (req, res) => {
  try {

    const watchListID = req.params.id;

    if (!watchListID) {
      return res.status(404).json({ message: "Item ID is required" })
    }

    const item = await prisma.watchlist.findUnique({ where: { id: watchListID } })

    if (!item) {
      return res.status(404).json({ message: "Item is not found!" })
    }

    if (req.user.id !== item.userID) {
      return res.status(404).json({ message: "Action Not allowed!" })
    }

    const deletedItem = await prisma.watchlist.delete({ where: { id: watchListID } })

    res.status(200).json({ message: "Item Deleted Successfully", data: deletedItem })

  } catch (error) {

    console.log('error removing from watch list : ', error)
    res.status(500).json({ message: "Interval Server Error", error: error })

  }
}

export const updateWatchList = async (req, res) => {

  console.log('checking body data ****** ', req.params)
  try {

    const watchListID = req.params.id;
    const data = req.body;

    console.log('checking body data ****** ', req.params)
    console.log('checking body data ****** ', watchListID)
    console.log('checking body data ****** ', data)

    if (!watchListID) {
      return res.status(404).json({ message: "Item ID is required" })
    }

    const item = await prisma.watchlist.findUnique({ where: { id: watchListID } })

    if (!item) {
      return res.status(404).json({ message: "Item is not found!" })
    }

    if (req.user.id !== item.userID) {
      return res.status(404).json({ message: "Action Not allowed!" })
    }


    const updatedItem = await prisma.watchlist.update({ where: { id: watchListID }, data: data })

    res.status(200).json({ message: "Item Updated Successfully!", data: updatedItem })

  } catch (error) {
    console.log('error removing from watch list : ', error)
    res.status(500).json({ message: "Interval Server Error", error: error })
  }

}
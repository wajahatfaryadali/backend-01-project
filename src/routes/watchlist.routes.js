import express from "express";
import {
  addToWatchListController,
  getWatchListController,
  removeFromWatchList,
  updateWatchList,
} from "../controllers/watchlist.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const watchListRoutes = express.Router();

watchListRoutes.use(authMiddleware)

watchListRoutes.get("/", getWatchListController);

watchListRoutes.post("/", addToWatchListController);

watchListRoutes.delete("/:id", removeFromWatchList);

watchListRoutes.put("/:id", updateWatchList);


export default watchListRoutes;

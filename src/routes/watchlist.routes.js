import express from "express";
import {
  addToWatchListController,
  getWatchListController,
} from "../controllers/watchlist.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const watchListRoutes = express.Router();

watchListRoutes.use(authMiddleware)

watchListRoutes.get("/", getWatchListController);

watchListRoutes.post("/", addToWatchListController);

export default watchListRoutes;

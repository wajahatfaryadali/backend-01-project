import express from "express";
import {
  addToWatchListController,
  getWatchListController,
} from "../controllers/watchlist.controllers.js";

const watchListRoutes = express.Router();

watchListRoutes.get("/", getWatchListController);

watchListRoutes.post("/", addToWatchListController);

export default watchListRoutes;

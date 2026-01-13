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

// now test on post man by addig new watchlist movies and then add delete controller and route by passing id param 
// also learn about how to handle bulk delete and if body works in delete option

export default watchListRoutes;

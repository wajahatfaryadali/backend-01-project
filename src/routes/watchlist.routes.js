import express from "express";

const watchlistRouter = express.Router();

watchlistRouter.get("/", getWatchListController);

watchlistRouter.post("/", addToWatchListController);


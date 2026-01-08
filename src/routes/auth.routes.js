import express from "express";
import { registerController } from "../controllers/auth.controllers.js";

const registerRoute = express.Router();

registerRoute.post("/register", registerController);

export default registerRoute;

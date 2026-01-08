import express from "express";
import { loginController, registerController } from "../controllers/auth.controllers.js";

const registerRoute = express.Router();

registerRoute.post("/register", registerController);
registerRoute.post("/login", loginController);

export default registerRoute;

import express from "express";
import { loginController, logOutController, registerController } from "../controllers/auth.controllers.js";

const registerRoute = express.Router();

registerRoute.post("/register", registerController);
registerRoute.post("/login", loginController);
registerRoute.post("/logout", logOutController);

export default registerRoute;

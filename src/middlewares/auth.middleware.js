import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

export const authMiddleware = async (req, res, next) => {
    try {
        let token = "";
        // const cookieToken = req.headers.cookie
        const authorizationToken = req?.headers?.authorization;

        // if (!cookieToken) {
        //     return res.status(401).json({ message: "Invalid Token" })
        // }

        if (authorizationToken && authorizationToken.startsWith("Bearer")) {
            token = authorizationToken.split(" ")[1];
        } else if (req.cookie?.token) {
            token = req.cookie.split("=")[1]
        }

        if (!token) {
            return res.status(401).json({ message: "Invalid Token" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userID = decoded.id;

        const user = await prisma.user.findUnique({ where: { id: userID }, omit: { password: true } })

        if (!user) {
            return res.status(401).json({ message: "User Not Found!", error: error })
        }

        req.user = user;

        next()

    } catch (error) {
        return res.status(401).json({ message: "Unauthroized User!", error: error })

    }

}
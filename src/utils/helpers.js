import jwt from "jsonwebtoken";

export const generateToken = (userID, res) => {
    const payload = { id: userID }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d"
    })

    res.cookie("token", token, {
        httpOnly: true,
        // path: , 
        maxAge: (1000 * 60 * 60 * 24) * 7,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
    })

    return token;
}
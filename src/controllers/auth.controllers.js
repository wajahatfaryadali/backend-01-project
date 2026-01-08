import bcrypt from "bcryptjs";
import { prisma } from "../config/db.js";
import { generateToken } from "../utils/helpers.js";


export const registerController = async (req, res) => {
  try {
    const body = req.body;
    const { name, email, password } = body;
    // const isUserExist = await prisma.user.findUnique({
    const isUserExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (isUserExist) {
      return res.status(400).json({
        message: "User elready exist!",
        body: {
          email,
          name,
        },
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res
      .status(200)
      .json({ message: "user created successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: "Inernal Server Error", error: error });
    console.error(error);
  }
};

export const loginController = async (req, res) => {
  const body = req.body;
  const { email, password } = body;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "email or password not correct! " });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ message: "email or password not correct! " });
    }

    const token = generateToken(user.id);

    res.status(200).json({
      message: "good to go! ", data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        },
        token: token
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Inernal Server Error", error: error });
    console.error(error);
  }
};

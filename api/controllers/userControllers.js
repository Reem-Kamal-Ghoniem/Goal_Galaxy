import * as user from "../models/userModels.js";
import bcrypt from "bcrypt";
import cookieParse from "cookie-parser";
import jwt from "jsonwebtoken";
const jwtKey = process.env.SECRET_KEY;
import sign from "jsonwebtoken";

export const registerController = async (req, res) => {
    const { userName, email, password } = res.body;
    const userExists = await user.getUser(email);
    if (userExists) {
        res.json({ message: "This Email already exists please log in" });
    } else {

        bcrypt.hash(password, 10).then((hash) => {
            user.createUser({
                name: userName,
                email: email,
                password: hash,
            })
                .then(() => {
                    res.json
                })
                .catch((error) => {
                    if (error) {
                        res.status(400).json({ error: error });
                    }
                });
        });
    }
};

export const loginController = async (req, res) => {
    const { email, password } = req.body;
    const savedUser = await userModel.getUser(email);
    if (savedUser === null) {
        res.status(400).json({ error: "Email does not exist please register" });
    } else {
        try {
            if (await bcrypt.compare(password, savedUser.password)) {
                const accessToken = sign(savedUser, secretKey, {
                    expiresIn: "1h",
                });
                res
                    .cookie("access-token", accessToken, {
                        maxAge: 3600000,
                        httpOnly: true,
                    })
                    .json("logged in successfully");
            }
        } catch (err) {
            res.status(400).json({ error: "Invalid password" });
        }
    }
};

export const logoutController = async (req, res) => {
    res.clearCookie("access-token");
    res.status(200).json({ message: `Logged out successfully` });
};
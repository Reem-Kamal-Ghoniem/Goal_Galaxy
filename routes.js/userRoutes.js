import express from "express";
import * as controller from "../controller/userController";

const route = express.Router();

route.post("/login", controller.loginController);
route.post("/register", controller.registerController);
export default route;
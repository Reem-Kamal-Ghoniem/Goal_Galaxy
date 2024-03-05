import express from "express";
import * as controller from "../controller/taskController";

const route = express.Router();

route.get("/getTask/:id", controller.getTask);
route.post("/addTask/:user_id", controller.createTask);
route.delete("/deleteTask/:id", controller.deleteTask);
route.put("/updateTask/:id", controller.updateTask);
export default route;
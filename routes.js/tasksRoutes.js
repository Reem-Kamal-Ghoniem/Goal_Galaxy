import express from "express";
import * as controller from "../controller/taskController";

const route = express.Router();

route.get("/getTask/:id", controller.getTaskController);
route.post("/addTask/:user_id", controller.createTaskController);
route.delete("/deleteTask/:id", controller.deleteTaskController);
route.put("/updateTask/:id", controller.updateTaskController);
export default route;
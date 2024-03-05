import * as model from "../models/taskModel.js";

export const getTask = async (req, res) => {
    const task = await model.getTask(req.params.id);
    if (!task) {
        res.status(404).send({ message: "Task not found" });
    } else {
        res.status(200).json({ task: task });
    }
};

export const createTask = async (req, res) => {
    const { name, priority, deadline } = req.body;
    const data = {
        name: name,
        priority: priority,
        deadline: deadline,
        userId: req.params.user_id,
    };
    const task = await model.createTask(data);
    res.status(201).json({
        message: "Task created successfully",
        task: task,
    });
};

export const deleteTask = async (req, res) => {
    if (await model.deleteTask(req.params.id)) {
        res.status(204);
    } else {
        res.status(404).json({ message: "task not found" });
    }
};

export const updateTask = async (req, res) => {
    const { name, priority, deadline } = req.body;
    const data = {
        name: name,
        priority: priority,
        deadline: deadline,
    };
    const taskId = req.params.id;
    if (!model.getTask(taskId)) {
        return res.status(404).json({ message: "task not found" });
    }
    model.updateTask(taskId, data);
    res.status(200).json({
        message: "Task updated successfully",
        task: task,
    });
};
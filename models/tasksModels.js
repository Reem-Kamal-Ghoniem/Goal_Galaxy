import { prisma } from '../utils/client.js'

export async function getTask(taskId) {
    const taskGet = await prisma.project.findUnique({
        where: {
            id: taskId,
        },
    })
    return taskGet
}
export async function createTask(taskData) {

}
export async function deleteTask(taskId) {
    const taskDel = await prisma.project.delete({
        where: {
            id: taskId,
        },
    })
    return taskDel ? true : false
}


export async function updateTask(taskId, taskData) {
    const taskUpd = await prisma.project.update({
        where: {
            id: taskId,
        },
        data: {
            name: taskData.name,
            priority: taskData.priority,
            deadline: taskData.deadline
        },
    })
    return taskUpd
} name: name,
    priority: priority,
        deadline: deadline
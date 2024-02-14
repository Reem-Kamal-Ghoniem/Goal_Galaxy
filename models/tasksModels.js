import { prisma } from '../../util/client.js'

export async function getTask(taskId) {
    const taskGet = await prisma.tasks.findUnique({
        where: {
            id: taskId,
        },
    })
    return taskGet
}
export async function createTask(taskData) {
    const task = await prisma.tasks.create({
        data: taskData
    })
    return task
}
export async function deleteTask(taskId) {
    const taskDel = await prisma.tasks.delete({
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
        data: taskData
    })
    return taskUpd
} 
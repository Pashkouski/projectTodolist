import axios from "axios";
import {ResponseType} from "./todolistAPI";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {
        'API-KEY': '205fb002-e5ab-4a9d-8440-8b997d10d8ce'
    },
})

export const tasksAPI = {
    getTasks(todoID: string) {
        return instance.get<GetTaskType>(`${todoID}/tasks`)
    },
    deleteTasks(todoID: string, taskID: string) {
        return instance.delete<ResponseType>(`${todoID}/tasks/${taskID}`)
    },
    createTasks(todoID: string, title: string) {
        return instance.post<ResponseType<TaskType>>(`${todoID}/tasks/`, {title})
    },
    updateTasks(todoID: string, taskID: string, newTitle: string) {
        return instance.put<ResponseType<TaskType>>(`${todoID}/tasks/${taskID}`, {title: newTitle})
    }
}
type TaskType = {
    addedDate: string
    deadline: null
    description: null
    id: string
    order: number
    priority: number
    startDate: null
    status: number
    title: string
    todoListId: string
    totalCount: number
}


type GetTaskType = {
    error: null
    items: [TaskType]
    totalCount: number
}


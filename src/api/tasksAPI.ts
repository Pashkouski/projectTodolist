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
        return instance.get<GetTasksResponse>(`${todoID}/tasks`)
    },
    deleteTasks(todoID: string, taskID: string) {
        return instance.delete<ResponseType>(`${todoID}/tasks/${taskID}`)
    },
    createTasks(todoID: string, title: string) {
        return instance.post(`${todoID}/tasks/`, {title})
    },
    updateTasks(todoID: string, taskID: string, title: string) {
        return instance.put(`${todoID}/tasks/${taskID}`, {title})
    }
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    Items: {
        description: string
        title: string
        completed: boolean
        status: number
        priority: number
        startDate: string
        deadline: string
        id: string
        todoListId: string
        order: number
        addedDate: string
    }
}
import React, {useEffect, useState} from 'react'
import {tasksAPI} from "../api/tasksAPI";

export default {
    title: 'tasks',
    headers: {
        'API-KEY': '205fb002-e5ab-4a9d-8440-8b997d10d8ce'
    }
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todoID = '6bcdb6a4-6f8b-4a2a-a3ec-ced53596ea31'
        tasksAPI.getTasks(todoID)
            .then((res) => {
                setState(res.data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = '6bcdb6a4-6f8b-4a2a-a3ec-ced53596ea31'
        const taskID = '9378a2bc-367c-49f2-bba8-be3775d747fb'
        tasksAPI.deleteTasks(todoID, taskID)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todoID = '6bcdb6a4-6f8b-4a2a-a3ec-ced53596ea31'
        const title = 'test'
        tasksAPI.createTasks(todoID, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}


export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = '6bcdb6a4-6f8b-4a2a-a3ec-ced53596ea31'
        const taskID = 'c2dd7fdc-28ea-441a-aea2-e5384582bf6d'
        const title = 'new 321321'
        tasksAPI.updateTasks(todoID, taskID, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

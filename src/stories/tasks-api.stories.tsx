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
    const [todoID, setTodoID] = useState<any>(null)


    const getTasksHandler = () => {
        tasksAPI.getTasks(todoID)
            .then((res) => {
                setState(res.data)
                setTodoID('')
            })
    }
    return <div>
        <div>{JSON.stringify(state)}</div>
        <input type="text" placeholder={'todoID'} value={todoID} onChange={(e)=> setTodoID(e.currentTarget.value)}/>
        <button onClick={getTasksHandler}>getTasks</button>
    </div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todoID, setTodoID] = useState<string>('')
    const [taskID, setTaskID] = useState<string>('')

    const DeleteTasksHandler = () => {
        tasksAPI.deleteTasks(todoID, taskID)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        <div>{JSON.stringify(state)}</div>
        <input type="text" placeholder={'todoID'} value={todoID} onChange={(e)=>setTodoID(e.currentTarget.value)}/>
        <input type="text" placeholder={'taskID'} value={taskID} onChange={(e)=>setTaskID(e.currentTarget.value)}/>
        <button onClick={DeleteTasksHandler}>deleteTasks</button>
    </div>
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todoID, setTodoID] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const AddTasksHandler = () => {
        tasksAPI.createTasks(todoID, title)
            .then((res) => {
                setState(res.data)
                setTodoID('')
                setTitle('')
            })
    }
    return <div>
        <div>{JSON.stringify(state)}</div>
        <input type="text" placeholder={'todoID'} value={todoID} onChange={(e)=>setTodoID(e.currentTarget.value)}/>
        <input type="text" placeholder={'title'} value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
         <button onClick={AddTasksHandler}>AddTasks</button>
    </div>
}


export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todoID, setTodoID] = useState<string>('')
    const [taskID, setTaskID] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const updateTitleHandler = () => {
        tasksAPI.updateTasks(todoID, taskID, title)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" value={todoID} placeholder='todoID' onChange={(e)=>setTodoID(e.currentTarget.value)}/>
            <input type="text" value={taskID} placeholder='taskID' onChange={(e)=>setTaskID(e.currentTarget.value)}/>
            <input type="text" value={title} placeholder='title' onChange={(e)=>setTitle(e.currentTarget.value)}/>
            <button onClick={updateTitleHandler}>update title</button>
        </div>
    </div>
}

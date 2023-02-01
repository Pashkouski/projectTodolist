import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType} from "./todolists-reducer";


type ActionsType = removeTaskACType
    | addTaskACType
    | changeTaskStatusACType
    | changeTaskTitleACType
    | AddTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASKS':
            return {
                ...state,
                [action.payload.todolistID]: state[action.payload.todolistID]
                    .filter(el => el.id !== action.payload.tasksID)
            }
        case 'ADD-TASKS': {
            let post = {id: v1(), title: action.payload.title, isDone: false}
            return {...state, [action.payload.todolistID]: [post, ...state[action.payload.todolistID]]}
        }
        case "CHANGE-TASKS-STATUS":
            return {
                ...state, [action.payload.todolistID]:
                    state[action.payload.todolistID]
                        .map(el => el.id === action.payload.tasksID
                            ? {...el, isDone: action.payload.status}
                            : el)
            }
        case "CHANGE-TASK-TITLE":
            return {
                ...state, [action.payload.todolistID]: state[action.payload.todolistID]
                    .map(el => el.id === action.payload.tasksID
                        ? {...el, title: action.payload.title}
                        : el)
            }
        case "ADD-TODOLIST":
            return {
                ...state, [action.todolistId]: []
            }
        default:
            return state
    }
}


export type removeTaskACType = ReturnType<typeof removeTaskAC>
export type addTaskACType = ReturnType<typeof addTaskAC>
export type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>


export const removeTaskAC = (tasksID: string, todolistID: string) => {
    return {
        type: 'REMOVE-TASKS',
        payload: {
            tasksID,
            todolistID
        }
    } as const
}

export const addTaskAC = (title: string, todolistID: string) => {
    return {
        type: 'ADD-TASKS',
        payload: {
            title,
            todolistID
        }
    } as const
}

export const changeTaskStatusAC = (tasksID: string, status: boolean, todolistID: string) => {
    return {
        type: 'CHANGE-TASKS-STATUS',
        payload: {
            tasksID,
            status,
            todolistID
        }
    } as const
}

export const changeTaskTitleAC = (tasksID: string, todolistID: string, title: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        payload: {
            tasksID,
            todolistID,
            title
        }

    } as const
}


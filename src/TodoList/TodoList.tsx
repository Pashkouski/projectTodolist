import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "../App";


export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    RemoveType: (id: string) => void
    Filter: (str: FilterValueType) => void
    addTitle: (value: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


export const TodoList = (props: TodoListPropsType) => {

    const [title, setTitle] = useState<string>('')

    const tasksItems = (props.tasks.length)
        ? props.tasks.map((t) => {
            const onClick = () => props.RemoveType(t.id)
            return (
                <li key={t.id}>
                    <button onClick={onClick}>X</button>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                </li>
            )
        })
        : <span>Tasks list is empty</span>

    const addTasks = () => {
        props.addTitle(title)
        setTitle('')
    }

    const setLocalTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyDownAddTAsksToToodoListH =  (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && addTasks()
    }

    // const setAllFilterHandler = () => {
    //     props.Filter('All')
    // }
    // const setActiveFilterHandler = () => {
    //     props.Filter('Active')
    // }
    // const setCompletedFilterHandler = () => {
    //     props.Filter('Completed')
    // }
    const getOnClickSetFilterHAndler = (filter: FilterValueType) => ()=>props.Filter(filter)

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={setLocalTitle}
                    onKeyDown={onKeyDownAddTAsksToToodoListH} />

                <button onClick={addTasks}>+</button>
            </div>
            <ul>
                {tasksItems}
            </ul>
            <div>
                <button onClick={getOnClickSetFilterHAndler('All')}>All</button>
                <button onClick={getOnClickSetFilterHAndler("Active")}>Active</button>
                <button onClick={getOnClickSetFilterHAndler("Completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;
import React from 'react';


export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    RemoveType: (id: string) => void
    Filter: (str: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


export const TodoList = (props: TodoListPropsType) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {   props.tasks.map( (t) =>
                    <li key={t.id}>
                        <button onClick={()=>props.RemoveType(t.id)}>X</button>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
                )}
            </ul>
            <div>
                <button onClick={()=>props.Filter('All')}>All</button>
                <button onClick={()=>props.Filter('Active')}>Active</button>
                <button onClick={()=>props.Filter('Completed')}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;
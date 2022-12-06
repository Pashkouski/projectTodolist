import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList/TodoList";





function App() {
    const todoListTitle1: string = "What to learn"
    const todoListTitle2: string = "What to buy"
    const tasks1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "TS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
         const tasks2: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "TS", isDone: true},
        {id: 3, title: "React", isDone: true},
    ]
    return (
        <div className="App">

            <TodoList title={todoListTitle1} tasks={tasks1}/>
            <TodoList title={todoListTitle2} tasks={tasks2}/>

        </div>
    );
}

export default App;

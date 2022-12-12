import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";


function App() {
    const todoListTitle1: string = "What to learn"

    let tasks1 = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "TS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]


    let [tasks, setTasks] = useState(tasks1);
    let [filter, setFilter] = useState("All");


    const RemoveTasks = (id: number) => {
        let newTasks1 = tasks.filter(el => el.id !== id)
        setTasks(newTasks1)
    }
    let newFilter = tasks1;
    if (filter == "Active") {
        {
            newFilter = tasks1.filter(el => el.isDone !== false)
        }
    }
    if (filter == "Completed") {
        {
            newFilter = tasks1.filter(el => el.isDone !== true)
        }
    }


    const FilterTasks = (props: string) => {
        setFilter(props)
    }
    return (
        <div className="App">

            <TodoList title={todoListTitle1}
                      tasks={newFilter}
                      RemoveTasks={RemoveTasks}
                      FilterTasks={FilterTasks}
            />

        </div>
    );
}

export default App;

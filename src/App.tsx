import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import {v1} from "uuid";

export type FilterValueType = 'All' | "Active" | 'Completed'

function App() {
    const todoListTitle1: string = "What to learn"

    let tasks1 = [
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "TS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "TS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "TS", isDone: true},
        {id: v1(), title: "React", isDone: false}
    ]


    const addTitle = (value: string) => {
        let addTasks ={
            id: v1(),
            title: value,
            isDone: false
        };
        setTasks([addTasks, ...tasks])
    }


    const [tasks, setTasks] = useState(tasks1)

    const RemoveType = (id: string) => {
      let removeTasks =  tasks.filter( f => f.id !== id)
        setTasks(removeTasks)
    }

    const [filter, setFilter] = useState<FilterValueType>('All')


    const FooFilter = () => {
        switch (filter) {
            case "Active":
                return tasks.filter( f => !f.isDone)
            case "Completed":
                return tasks.filter( f => f.isDone)
            default:
                return tasks
            }
    }



    const Filter = (str: FilterValueType) => {
        setFilter(str)
    }




    return (
        <div className="App">

            <TodoList title={todoListTitle1}
                      tasks={FooFilter()}
                      RemoveType={RemoveType}
                      Filter={Filter}
                      addTitle={addTitle}
            />

        </div>
    );
}

export default App;

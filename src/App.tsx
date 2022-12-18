import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import {v1} from "uuid";

type FilterValueType = 'All' | "Active" | 'Completed'
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


    const [tasks, setTasks] = useState(tasks1)

    const RemoveType = (id: string) => {
      let removeTasks =  tasks.filter( f => f.id !== id)
        setTasks(removeTasks)
    }

    const [filter, setFilter] = useState('All')


    const FooFilter = () => {
        let newFilter = tasks;
        if(filter === 'Active') {
            newFilter =  tasks.filter( f => !f.isDone)
        }
        if(filter === 'Completed') {
            newFilter =  tasks.filter( f => f.isDone)
        }
        return newFilter
    }



    const Filter = (str: string) => {
        setFilter(str)
    }




    return (
        <div className="App">

            <TodoList title={todoListTitle1}
                      tasks={FooFilter()}
                      RemoveType={RemoveType}
                      Filter={Filter}
            />

        </div>
    );
}

export default App;

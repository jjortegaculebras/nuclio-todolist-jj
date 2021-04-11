import React, { useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
const [tasks, setTasks] = useState ([]);

const addTask = task => {
    const newTaks = [task,...tasks]

    setTasks(newTaks);
    console.log(...tasks);
}

    return (
        <div>
            <TodoForm onSubmit={addTask}/>
        </div>
    )
}

export default TodoList
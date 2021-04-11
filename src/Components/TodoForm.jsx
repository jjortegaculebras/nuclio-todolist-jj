import React, { useState } from 'react'
import {generateId} from '../utils/GenerateId'

function TodoForm () {
const [input, setInput] = useState ("");
const [error, setError] = useState ("");

const handleSubmit = e => {
    e.preventDefault();
    if(!input) {
        setError ("Your task input cannot be empty")
    } else {
        onSubmit({
            id: generateId(),
            input,
            completed:false,
        });
        setInput("");
        setError("");
    
    }
};

const handleChange = e => {
    setInput(e.target.value);
}

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={input}
                name="text"
                onChange={handleChange}
            />
    
            <button type="submit">Add</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    )
}

export default TodoForm
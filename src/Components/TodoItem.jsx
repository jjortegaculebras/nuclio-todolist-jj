import React, { useState } from 'react'

function TodoItem({id, input, onClick}) {

    return (
        <li onClick={() => onClick(id)}>{input}</li>
    )
}

export default TodoItem
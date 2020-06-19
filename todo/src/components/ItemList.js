import React from "react";

const ItemList = ({todo, toggle, clearCompleted}) => {
    const handleClear = e => {
        e.preventDefault();
        clearCompleted();
    }
    return(
        <div>
            <p className={todo.completed ? 'done' : ''} onClick={() => toggle(todo.id)}>{todo.item}</p>
            <button onClick={handleClear}>Done</button>
        </div>
        
    )
}

export default ItemList;
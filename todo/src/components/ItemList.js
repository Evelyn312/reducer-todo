import React from "react";

const ItemList = ({todo, toggle}) => {
    return(
        <li className={todo.completed ? 'done' : ''} onClick={() => toggle(todo.id)}>{todo.item}</li>
    )
}

export default ItemList;
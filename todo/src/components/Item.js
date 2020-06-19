import React, {useReducer} from "react";
import {initialState, itemReducer} from "../reducers/itemReducer";

const Item = () => {
    const [state, dispatch] = useReducer(itemReducer, initialState);
    console.log("state at the beginning for item", state)
    return (
        <div>
         
        </div>
    )
}

export default Item;
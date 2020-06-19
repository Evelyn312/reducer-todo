import React, {useState} from "react";

const ItemForm = ({add}) => {

    const[newItemText, setNewItemText] = useState("");
    const handleChanges = e => {
        setNewItemText(e.target.value);
    }
    
    const submitItem = e => {
        e.preventDefault();
        add(newItemText);
        setNewItemText("");
    }

    // const handleClear = e => {
    //     e.preventDefault();
    //     clearCompleted();
    // // }
     
    return(
        <div>
            Things To Do:
            <form onSubmit={submitItem}>
                <label>
                    <input 
                        placeholder="Add To Do Item"
                        name="newItem"
                        id="newItem"
                        type="text"
                        value={newItemText}
                        onChange={handleChanges}
                    />
                </label>
                <button >Add</button>
                {/* <button onClick={handleClear}>Clear Completed</button> */}
            </form>
        </div>
    )
}

export default ItemForm;
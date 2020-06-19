import React, {useReducer} from 'react';
import './App.css';

import {itemReducer, initialState} from "./reducers/itemReducer";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";



function App() {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  const addItem = (text) => {
    dispatch({type: 'ADD_ITEM', payload: text})
  }

  const toggleComplete = (id => {
    dispatch({type: 'TOGGLE_COMPLETE', id})
  })

  const removeCompleted = () => {
    console.log('remove ');
    dispatch({type: 'CLEAR_COMPLETED'})
  }
  
  return (
    <div className="App">
      <ItemForm add={addItem} clearCompleted={removeCompleted}/>
      <ul>
        <h3>Todo List</h3>
        {state.todos.map((item, key) => 
          <ItemList key={key} todo={item} toggle={toggleComplete} remove={removeCompleted}/>
        )}
      </ul>

    </div>
  )
}

export default App;

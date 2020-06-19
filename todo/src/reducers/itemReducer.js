
export const initialState = {
  todos :[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]
}

export const itemReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          todos: [ ...state.todos, { item: action.payload, completed: false, id: Date.now()}]
        }
      case "TOGGLE_COMPLETE":
        return { 
          ...state,
          todos: state.todos.map(todo => 
            todo.id === action.id ? { ...todo, completed: !todo.completed} : todo
          )
        };
      case "CLEAR_COMPLETED":
        return {
          ...state,
          todos: state.todos.filter(todo => !todo.completed),
        }
      default:
        return state;
    }
  };
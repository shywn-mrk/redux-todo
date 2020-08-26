import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../../types/todos'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        )
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === payload.id ? payload : todo  
        )
      }
    default: 
      return state
  }
}

export default reducer

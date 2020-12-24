import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../../types/todos'

const addTodoAction = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

const toggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  payload: id
})

const updateTodoAction = (id) => ({
  type: UPDATE_TODO,
  payload: id
})

const deleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: id
})

export { addTodoAction, toggleTodoAction, deleteTodoAction, updateTodoAction }

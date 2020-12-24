import React, { useState } from 'react'

import {
  toggleTodoAction,
  updateTodoAction,
  deleteTodoAction
} from '../../redux/actions/todos'

import { useDispatch } from 'react-redux'

const Todo = ({ todo }) => {
  const [newTodo, setNewTodo] = useState('')
  const [showEdit, setShowEdit] = useState(false)

  const toggleEdit = () => {
    setShowEdit(!showEdit)
  }

  const dispatch = useDispatch()

  const toggleTodo = () => {
    dispatch(toggleTodoAction(todo.id))
  }

  const deleteTodo = () => {
    dispatch(deleteTodoAction(todo.id))
  }

  const updateTodo = () => {
    const updatedTodo = {
      ...todo,
      text: newTodo
    }

    dispatch(updateTodoAction(updatedTodo))

    setNewTodo('')
  }

  return (
    <div className="row justify-content-center my-3">
      <div className="border border-info col-md-6 p-2 rounded">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
        />
        {
          todo.completed ? (
            <del className="ml-2">{todo.text}</del>
          ) : (
            <span className="ml-2">{todo.text}</span>
          )
        }
        <i
          className="fas fa-trash ml-2 text-danger"
          style={{ float: 'right' }}
          onClick={deleteTodo}
        ></i>
        <i
          className="fas fa-edit ml-2 text-dark"
          style={{ float: 'right' }}
          onClick={toggleEdit}
        ></i>
        {
          showEdit ? (
            <div className="col-md-4 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Update todo"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
              />
              <button 
                className="btn btn-success mt-2"
                type="button"
                onClick={updateTodo}
              >
                Update
              </button>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default Todo

import React, { useState } from 'react'

import { TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../../redux/types/todos'

import { useDispatch } from 'react-redux'

const Todo = ({ todo }) => {
  const [newTodo, setNewTodo] = useState('')
  const [showEdit, setShowEdit] = useState(false)

  const toggleEdit = () => {
    setShowEdit(!showEdit)
  }

  const dispatch = useDispatch()

  const toggleTodo = () => {
    dispatch({ type: TOGGLE_TODO, payload: todo.id })
  }

  const deleteTodo = () => {
    dispatch({ type: DELETE_TODO, payload: todo.id })
  }

  const updateTodo = () => {
    const updatedTodo = {
      ...todo,
      text: newTodo
    }

    dispatch({ type: UPDATE_TODO, payload: updatedTodo })

    setNewTodo('')
  }

  return (
    <div className="row justify-content-center my-3">
      <div className="border border-info col-md-5 p-2 rounded">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
        />
        <span className="ml-2">{todo.text}</span>
        <i className="fas fa-trash ml-2 text-danger" style={{ float: 'right' }} onClick={deleteTodo}></i>
        <i className="fas fa-edit ml-2 text-dark" style={{ float: 'right' }} onClick={toggleEdit}></i>
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
              <button className="btn btn-success mt-2" type="button" onClick={updateTodo}>Update</button>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default Todo

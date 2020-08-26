import React, { useState } from 'react'

import { v4 as uuid } from 'uuid'

import { ADD_TODO } from '../../redux/types/todos'

import { addTodoAction } from '../../redux/actions/todos'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
  const [todo, setTodo] = useState('')

  // const addTodo = useActions(todo => addTodoAction(todo))
  const dispatch = useDispatch()

  const onChange = event => {
    setTodo(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()

    const newTodo = {
      id: uuid(),
      text: todo,
      completed: false
    }

    dispatch({type: ADD_TODO, payload: newTodo})

    setTodo('')
  }

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-6">
        <form onSubmit={onSubmit}>
          <div className="row justify-content-center">
            <input
              className="form-control my-2"
              type="text"
              name="todo"
              placeholder="Add todo"
              value={todo}
              onChange={onChange}
            />
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Todo"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTodo

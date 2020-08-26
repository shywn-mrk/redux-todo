import React from 'react'

import Todo from './Todo'

import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector(state => state.todos)

  return (
    <div className="mt-5">
      {
        todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))
      }
    </div>
  )
}

export default TodoList

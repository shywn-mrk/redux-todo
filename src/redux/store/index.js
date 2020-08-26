import { createStore } from 'redux'
import reducer from '../reducers/todos'

const preloadedState = {
  todos: [
    {
      id: 1,
      text: 'Todo App',
      completed: false
    },
    {
      id: 2,
      text: 'Context is killing redux',
      completed: true
    },
    {
      id: 3,
      text: 'My todo',
      completed: true
    }
  ]
}

const store = createStore(
  reducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

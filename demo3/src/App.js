import React, { useReducer} from 'react'
import Context from './Context'
import userReducer from './reducers/user_reducer'
import booksReducer from './reducers/books_reducer'
import moviesReducer from './reducers/movies_reducer'
import User from './components/user'
import Books from './components/books'
import Movies from './components/movies'

const store = {
  user: null,
  books: null,
  movies: null
}

const table =
{
  ...userReducer,
  ...booksReducer,
  ...moviesReducer
}

const reducer = (state, action) => {
  return table[action.type](state, action)
}


function App() {

  // 注意这里是 useReducer，不是 useContext
  const [state, dispatch] = useReducer(reducer, store)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider >
  )
}

export default App
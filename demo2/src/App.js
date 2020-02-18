import React, { useReducer, createContext, useContext, useEffect } from 'react'
import ajax from './ajax'

const store = {
  user: null,
  books: null,
  movies: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        user: action.user
      }
    case 'setBooks':
      return {
        ...state,
        books: action.books
      }
    case 'setMovies':
      return {
        ...state,
        movies: action.movies
      }
  }
}

const Context = createContext(null)

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

function User() {

  const { state, dispatch } = useContext(Context)

  // 使用 useEffect 的效果：多次 User 执行（重新渲染），只有第一次 ajax 会执行
  useEffect(() => {
    ajax('/user').then(user => {
      dispatch({ type: 'setUser', user })
    })
  }, [])


  return (
    <div>
      <h1>个人信息:</h1>
      <div>name:{state.user ? state.user.name : ''}</div>
    </div>
  )
}

function Books() {
  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    ajax('/books').then(books => {
      dispatch({ type: 'setBooks', books })
    })
  }, [])


  return (
    <div>
      <h1>书籍</h1>
      <ol>
        {state.books ? state.books.map(book => <li key={book.id}>{book.name}</li>) : '加载中'}
      </ol>
    </div>
  )
}

function Movies() {
  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    ajax('/movies').then(movies => {
      dispatch({ type: 'setMovies', movies })
    })
  }, [])
  return (
    <div>
      <h1>电影</h1>
      <ol>
        {state.movies ? state.movies.map(movie => <li key={movie.id}>{movie.name}</li>) : '加载中'}
      </ol>
    </div>
  )
}
export default App
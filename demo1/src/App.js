import React, { Component, useReducer } from 'react'

const initial = {
  n: 0
}

const reducer = (state, action) => {
  if (action.type === 'add') {
    return {
      n: state.n + action.payload
    }
  } else if (action.type === 'multi') {
    return {
      n: state.n - action.payload
    }
  } else {
    return new Error('unknown type')
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,initial)
  
  const add = () => {
    dispatch({type:'add',payload:1})
  }
  const minus = () => {
    dispatch({type:'multi',payload:1})
  }
  
  return (
    <div>
      <div>{state.n}</div>
      <div>
        <button onClick={add}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
    </div>
  )
}

export default App
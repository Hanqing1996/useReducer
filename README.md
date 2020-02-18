#### demo1
> useReducer 简单示例
1. 创建初始值 initialState
2. 创建 reducer(state,action)
3. const [state,dispatch]=useReducer(reducer,initial)
4. dispatch(action)

#### demo2
> 用 useReducer 代替 Redux
1. 将数据集中在一个 store 对象内
2. 将所有操作集中在一个 reducer 内
3. 创建一个全局的 Context
4. 在顶层组件中将 useReducer 创建的 state,dispatch 传入 Provider
5. 各组件可通过 useContext 创建 state, dispatch,与 store 相联系

#### demo3 
> 将 demo2 模块化
1. 将组件模块放入 components 目录
2. 将 reducer 放入 reducers 目录
```
const table =
{
  ...userReducer,
  ...booksReducer,
  ...moviesReducer
}

const reducer = (state, action) => {
  return table[action.type](state, action)
}
```
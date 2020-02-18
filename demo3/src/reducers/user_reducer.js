const setUser = (state, action) => (
    {
        ...state,
        user: action.user
    }
)

export default {
    // 可能还有其他动作，比如 removeUser 之类的
    setUser
}
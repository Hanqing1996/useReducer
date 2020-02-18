const setBooks = (state, action) => (
    {
        ...state,
        books: action.books
    }
)

export default {
    setBooks
}
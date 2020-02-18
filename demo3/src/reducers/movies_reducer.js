const setMovies = (state, action) => (
    {
        ...state,
        movies: action.movies
    }
)

export default {
    setMovies
}
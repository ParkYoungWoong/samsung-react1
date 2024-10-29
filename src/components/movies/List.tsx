import { Link } from 'react-router-dom'
import { useMovieStore } from '@/stores/movie'
import Loader from '@/components/Loader'

export default function List() {
  const movies = useMovieStore(state => state.movies)
  const loading = useMovieStore(state => state.loading)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.imdbID}>
                <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

import { useState } from 'react'
import { useMovieStore } from '@/stores/movie'

export default function Search() {
  const [searchText, setSearchText] = useState('')
  const fetchMovies = useMovieStore(state => state.fetchMovies)

  return (
    <div>
      <input
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && fetchMovies(searchText)}
      />
      <button onClick={() => fetchMovies(searchText)}>검색</button>
    </div>
  )
}

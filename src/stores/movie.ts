import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import wait from '@/core/wait'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      movies: [] as Movie[], // 타입 단언!
      loading: false
    },
    set => {
      return {
        fetchMovies: async (searchText: string) => {
          set({
            loading: true
          })
          // await wait(2000)
          const res = await fetch(
            `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
          )
          const { Search } = await res.json()
          set({
            movies: Search,
            loading: false
          })
        }
      }
    }
  )
)

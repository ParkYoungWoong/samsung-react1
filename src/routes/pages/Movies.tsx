import { Outlet } from 'react-router-dom'
import Search from '@/components/movies/Search'
import List from '@/components/movies/List'

export default function Movies() {
  return (
    <>
      <h1>Movies Page!</h1>
      <Search />
      <List />
      <Outlet />
    </>
  )
}

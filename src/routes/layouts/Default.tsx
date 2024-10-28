import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'

export default function Default() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

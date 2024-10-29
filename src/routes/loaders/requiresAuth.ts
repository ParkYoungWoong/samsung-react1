import { redirect } from 'react-router-dom'

async function getAuth() {
  const token = localStorage.getItem('token')
  // const res = await fetch('https://api.heropy.dev/auth/me', {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // })
  // await res.json()
  return (
    token && {
      name: 'Neo',
      age: 85
    }
  )
}

export default async function requiresAuth() {
  const user = await getAuth()
  if (!user) {
    return redirect('/signin')
  }
  return user
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// useXxx ==> 훅(Hook)

export default function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(email, password)
    // 서버로 전송..(생략!)
    if (email && password) {
      localStorage.setItem(
        'token',
        'lb4CcyTtziq0ntHhe0Y9Maa02COIePA7PRF5fHpnhQ2e'
      )
      // 메인 페이지로 이동!
      navigate('/')
    }
  }

  return (
    <>
      <h1>Sign In Page!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}

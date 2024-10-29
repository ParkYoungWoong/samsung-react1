import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h1>페이지를 찾을 수 없어요!</h1>
      <Link to="/">홈으로 돌아가기</Link>
    </>
  )
}

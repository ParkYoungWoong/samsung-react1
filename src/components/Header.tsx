import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/signin', label: 'Sign In' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  return (
    <header>
      <ul>
        {navigations.map(nav => (
          <li key={nav.to}>
            <NavLink
              to={nav.to}
              className={({ isActive }) => (isActive ? styles.active : '')}>
              {nav.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  )
}

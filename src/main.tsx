import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from '@/routes'
import './main.css'

createRoot(document.getElementById('root')!).render(<Router />)

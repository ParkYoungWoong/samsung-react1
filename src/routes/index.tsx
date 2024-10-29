import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/Default'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import requiresAuth from './loaders/requiresAuth'

// Routes
const router = createBrowserRouter([
  {
    // path: '',
    element: <DefaultLayout />,
    children: [
      {
        path: '/', // http://localhost:5713/
        element: <Home />
      },
      {
        path: '/about', // http://localhost:5713/about
        element: <About />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/movies',
        element: <Movies />,
        loader: requiresAuth,
        children: [
          {
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}

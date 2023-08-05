import { Outlet, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
])

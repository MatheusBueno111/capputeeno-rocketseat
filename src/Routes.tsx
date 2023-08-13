import { Outlet, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import { FilterContextProvider } from './contexts/FilterContext'

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
        element: (
          <FilterContextProvider>
            <Home />
          </FilterContextProvider>
        ),
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
])

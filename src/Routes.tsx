import { Outlet, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import { StoreContextProvider } from './contexts/StoreContext'
import ProductInfo from './pages/ProductInfo'

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
          <StoreContextProvider>
            <Home />
          </StoreContextProvider>
        ),
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/:id',
        element: <ProductInfo />,
      },
    ],
  },
])

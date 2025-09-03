import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import Home from '@/pages/home'
import Services from '@/pages/services'
import NotFound from '@/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'services',
        element: <Services />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css'
import App from './App'



const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      // children: [
      //     {
      //         path: '/',
      //         element: <Home />
      //     },
      //     {
      //         path: '/cart',
      //         element: <Cart />
      //     },
      // ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

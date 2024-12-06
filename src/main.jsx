import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import router from './Routes/Routes.jsx'
import Context from './components/context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>

      <RouterProvider router={router}></RouterProvider>
    </Context>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { QuioskoProvider } from './context/QuioskoProvider'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QuioskoProvider>
      <RouterProvider router={router} />
    </QuioskoProvider>
   
    
  </React.StrictMode>,
)

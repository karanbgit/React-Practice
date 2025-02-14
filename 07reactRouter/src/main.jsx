import { ReactDOM } from 'react-dom/client'
import React from 'react'
import './index.css'

import { createBrowserRouter, RouteProvider, Router } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/'
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteProvider router={router} />


  </React.StrictMode>,
)

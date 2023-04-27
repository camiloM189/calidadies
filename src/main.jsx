import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AuthRoutes } from './auth/routes/AuthRoutes'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
        <AppRoutes/>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)

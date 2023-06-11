import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'
import './stylePage.css'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AuthRoutes } from './auth/routes/AuthRoutes'
import { PagesRoutes } from './page/routes/PagesRoutes'





ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
           <PagesRoutes/>  
          {/* <AppRoutes/>    */}
        </Provider>
      </BrowserRouter>
  // </React.StrictMode>,
)

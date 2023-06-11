import {  configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { actividadesSlice } from './actividades/actividadesSlice'
import { notesSlice } from './actividades/notesSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    notes:notesSlice.reducer,
    actividades:actividadesSlice.reducer,
    
  },
  

})
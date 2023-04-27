import {  configureStore } from '@reduxjs/toolkit'
import { calidadiesSlice } from './calidadies/calidadiesSlice'
import { authSlice } from './auth/authSlice'
import { plantillaSlice } from './prueba/plantillaSlice'

export const store = configureStore({
  reducer: {
    calidadies:calidadiesSlice.reducer,
    auth:authSlice.reducer,
    plantilla:plantillaSlice.reducer,

  },
  

})
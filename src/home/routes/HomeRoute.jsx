import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../page/HomePage'
import { Nabvar } from '../../ui/Nabvar'
import { DenominacionPage } from '../page/DenominacionPage'
import { ActivePlan } from '../page/ActivePlan'
import { PlantillaPage } from '../page/PlantillaPage'

export const HomeRoute = () => {
  return (
    <>
        <Nabvar/>
        <Routes>
            <Route path='/homepage' element={<HomePage/>}  />
            <Route path='/*' element={<Navigate to='/homepage'/>} />
            <Route path='/homepage/DenominacionPage' element={<DenominacionPage/>}/>
            <Route path='/homepage/Justificacióndelprograma' element={<PlantillaPage/>}/>
          

        </Routes>
    </>
  )
}

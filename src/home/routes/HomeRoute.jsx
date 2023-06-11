import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from '../page/HomePage'
import { Nabvar } from '../../ui/Nabvar'
import { TareaPage } from '../page/TareaPage'
import { ActualizarActiviteComponent } from '../components/ActualizarActiviteComponent'
import { CreateEventComponent } from '../components/CreateEventComponent'
import { SetEventComponent } from '../components/SetEventComponent'
import { CreateNotesComponent } from '../components/CreateNotesComponent'
import { NotNoteComponent } from '../components/NotNoteComponent'
import { EditMetas } from '../components/EditMetas'




export const HomeRoute = () => {

  const location = useLocation()
  const activeTitle = location.pathname.split('/').pop()

  return (
    <>
        <Nabvar/>
        <Routes>
            <Route path='/homepage' element={<HomePage/>}  />
            {/* <Route path='/' element={<Navigate to='/homepage'/>} /> */}
            <Route path='/homepage/Aspectoscurriculares' element={<TareaPage/>}/>
            <Route path={`/homepage/actualizar/:_id`} 
            element={<ActualizarActiviteComponent/>}/>
            <Route path={`/homepage/view/:_id`} 
            element={<SetEventComponent/>}/>
            {/* <Route path={`/homepage/actualizar/:_id`} 
            element={<ActualizarActiviteComponent/>}/> */}
            <Route path='/homepage/:pagina/:_id' element={<CreateEventComponent/>}/>
            <Route path='/homepage/:pagina/:_id/edit' element={<EditMetas/>}/>

            <Route path='/homepage/:pagina/:_id/:id' element={<NotNoteComponent/>}/>
            <Route path='/homepage/:pagina/:_id/:id/create' element={<CreateNotesComponent/>}/>
           
            
        </Routes>
    </>
  )
}

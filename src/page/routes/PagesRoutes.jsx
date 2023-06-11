import { Navigate, Route, Routes } from "react-router-dom"
import { HomePageCalidadies } from "../HomePageCalidadies"
import { NavBarPages } from "../navPages/NavBarPages"
import { AppRoutes } from "../../routes/AppRoutes"
import { useSelector } from "react-redux"


export const PagesRoutes = () => {
  const {aplication} = useSelector(state => state.auth)

  
  return (
   <>
   <NavBarPages/>
   
    <Routes>
      <Route path='/' element={<HomePageCalidadies/>}/>
      <Route path='/auth' element={<AppRoutes/>}/> 
      {/* <Route path='/*' element={<Navigate to='/HomePageCalidadies'/>} />  */}
     </Routes>
      
   </>
  )
}

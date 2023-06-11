import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useDispatch, useSelector } from 'react-redux'
import { HomeRoute } from "../home/routes/HomeRoute"
import { startCheckAuthToken } from "../store/auth/authThunks"
import { useEffect } from "react"
import { HomePageCalidadies } from "../page/HomePageCalidadies"
import { PagesRoutes } from "../page/routes/PagesRoutes"


export const AppRoutes = () => {

  // const {status,checkAuthToken} = checkAuth();
    const dispatch = useDispatch();
    const {status,aplication} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(startCheckAuthToken());
  }, [])

  
  if(status === 'checking'){
    return(
    <h3>Cargando...</h3>
    )
  }

  
  return (
    <>
 
        <Routes>
            {(status === 'not-authenticated')
              ? <Route path="/auth/login" element={<AuthRoutes/>}/>
             :<Route path="/homePage" element={<HomeRoute/>}/>
            }
           {/* <Route path="/Denominacion" element={<DenominacionPage/>}/> */}
        </Routes>

    </>
  )
}

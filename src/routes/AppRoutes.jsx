import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useDispatch, useSelector } from 'react-redux'
import { HomeRoute } from "../home/routes/HomeRoute"
import { startCheckAuthToken } from "../store/auth/authThunks"
import { useEffect } from "react"


export const AppRoutes = () => {

  // const {status,checkAuthToken} = checkAuth();
    const dispatch = useDispatch();
    const {status} = useSelector(state => state.auth)

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
              ? <Route path="/*" element={<AuthRoutes/>}/>
             :<Route path="/*" element={<HomeRoute/>}/>

            
            }
           {/* <Route path="/Denominacion" element={<DenominacionPage/>}/> */}
     

        </Routes>
    </>
  )
}

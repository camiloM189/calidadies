import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { useSelector } from "react-redux"
import { AppRoutes } from "../../routes/AppRoutes"


export const AuthRoutes = () => {

  return (
    <>
        <Routes>
            <Route path="/auth/*" element={<LoginPage/>}/>
            <Route path="/auth/register" element={<RegisterPage/>}/>
            <Route path='/*' element={<Navigate to='/auth/login'/>} />
        </Routes>    
    </>
  )
}

import { useDispatch } from "react-redux"
import { useForm } from "../../hook/useForm"
import { startRegister } from "../../store/auth/authThunks";

const registeFormFiles = {
  registerName:'',
  registerEmail:'',
  registerPassword:'',


}


export const RegisterPage = () => {


  const dispatch = useDispatch();

  const {onInputChange,registerName,registerPassword,registerEmail} = useForm(registeFormFiles)

  const onSubmitRegister = (event) => {
    event.preventDefault()
    dispatch(startRegister({name:registerName,email:registerEmail,password:registerPassword}))
    
  }



  return (

    <div className="container text-dark ">
       <div className="d-flex align-items-center justify-content-center login-center">
           <form className=" p-5 rounded bg-light border border-2" onSubmit={onSubmitRegister}>
            <h2 className="mb-3">Register</h2>

               <div className="form-group" >
                <input type="name" className="form-control mb-3 input-text" 
                id="name" placeholder="Nombre Completo"
                value={registerName} name="registerName"
                onChange={onInputChange}
                />
               </div>
               <div className="form-group" >
                <input type="email" className="form-control mb-3 input-text" 
                id="email" placeholder="Email"
                value={registerEmail} name="registerEmail"
                onChange={onInputChange}
                />
               </div>
               <div className="form-group">
                <input type="password" className="form-control mb-4 input-text"
                 id="password" placeholder="Password"
                 value={registerPassword} name="registerPassword"
                 onChange={onInputChange}
                 />
               </div>
               <button type="submit" className="btn btn-primary botton-login">Register</button>
               <p className="register-page">Ya tienes cuenta? <a href="/">Inicia Sesion</a></p>

           </form>
       </div>
     </div>

  )
}

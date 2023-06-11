import React, { useEffect } from 'react'
import { useForm } from '../../hook/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { starLoginWithEmailAndPassword } from '../../store/auth/authThunks'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const formData = {
	email: '',
	password:'',
  }
export const LoginPage = () => {
    const {errorMessage} = useSelector(state => state.auth);


	const dispatch = useDispatch()
	const {onInputChange,email,password} = useForm(formData)

	const onSubmitLogin = (event) => {
		event.preventDefault()
		
		 dispatch(starLoginWithEmailAndPassword({email,password}));
	}

	useEffect(() => {
	  if(errorMessage !== undefined){
         Swal.fire('Error en la autenticacion',errorMessage,'error')
	  }
	
	  
	}, [errorMessage])
	
  return (
    

     <div className="container text-dark ">
		<div className="d-flex align-items-center justify-content-center login-center">
			<form className=" p-5 rounded bg-light border border-2" onSubmit={onSubmitLogin}>
				<h2 className="mb-3 ">Login</h2>

				<div className="form-group" >
				 <input type="email" className="form-control mb-4 input-text" 
				   placeholder="Email"
				   value={email}
				   name='email'
				   onChange={onInputChange}
				   
				   />
				</div>
				<div className="form-group">
			     <input type="password" className="form-control mb-4 input-text" 
				 id="password" 
				 placeholder="Password"
				 value={password}
				 name='password'
				 onChange={onInputChange}
				 
				 />
				</div>
            	{/* <a href="/register" >Crear una cuenta</a> */}
				<button type="submit" className="btn btn-primary botton-login">Login</button>
				<p className="register-page">No tienes cuenta? <Link to={'/auth/register'}>Registrate</Link> </p>
			
			</form>
		</div>
	  </div>
  
    
  )
}

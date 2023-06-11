import calidadiesApi from "../../api/calidadiesApi";
import { checkingCredentials, clearErrorMessage, login, logout } from "./authSlice"


// const {status,displayName} = getState().auth;

export const starLoginWithEmailAndPassword = ({email,password}) => {
    return  async(dispatch,getState) => {
        dispatch(checkingCredentials());


        try{
            const {data} = await calidadiesApi.post('/auth',{email,password});
          

            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({name:data.name,uid:data.uid}));
        

          
            
        } catch (error) {
            dispatch(logout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }
}
export const startRegister = ({name,email,password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        try {
            const {data} = await calidadiesApi.post('/auth/new',{email,password,name})
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({name:data.name,uid:data.uid}));
        
        } catch (error) {
            dispatch(logout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }
}
export const startCheckAuthToken = () => {
    return async(dispatch,getState) => {
 
        const token = localStorage.getItem('token')
        if(!token) return dispatch(logout());
        try {

       
            const {data} = await calidadiesApi.get('/auth/renew')
       
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({name:data.name,uid:data.uid}))


        } 
        catch (error) {
            localStorage.clear();
            dispatch(logout());
        }
    }
}
export const startOnLogout = () => {
    return async(dispatch) => {
        try {
        dispatch(logout());
        localStorage.clear();
            


        } catch (error) {
            
        }



    }



}
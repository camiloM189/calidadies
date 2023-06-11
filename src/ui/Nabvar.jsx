import { useDispatch, useSelector } from "react-redux"
import { startOnLogout } from "../store/auth/authThunks"

export const Nabvar = () => {
  const dispatch = useDispatch()
  const {name} = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(startOnLogout());

  }

  return (
    <div className="navbar navbar-dark bg-dark px-4 nav">
        <span className="navbar-brand">
            {name}
        </span>
        <button className="btn btn-outline-danger" onClick={onLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span> Salir</span>


        </button>

    </div>
  )
}

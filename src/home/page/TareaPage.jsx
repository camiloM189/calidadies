import { useDispatch, useSelector } from "react-redux"
import { WindowPage } from "../components/WindowPage"
import { WindowStartComponent } from "../components/windowStartComponent"
import { startActividadesThunks, startGuardado } from "../../store/actividades/actividadesThunks"
import { CreateNewActiviteComponent } from "../components/CreateNewActiviteComponent"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export const TareaPage = () => {
    const {plan,loanding} = useSelector(state => state.actividades)
    const dispatch = useDispatch()
    const onClickNewPlan = () => {
            dispatch(startActividadesThunks())
    }
    useEffect(() => {
      dispatch(startGuardado())
    }, [])
  return (
    <>
    {
        (plan)?
        <CreateNewActiviteComponent/>
        :<>
        <WindowPage />
        <WindowStartComponent/>
        <button className="btn btn-dark boton-posicion" onClick={onClickNewPlan}>+</button>
        <Link to={'/homepage'}>
        <button className="btn btn-danger boton-back">volver</button>
        </Link>

         </>
    }
    </>
  )
}


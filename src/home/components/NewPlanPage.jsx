
import { useDispatch } from "react-redux"
import { startNewPlan } from "../../store/calidadies/thunks"



export const NewPlanPage = ({onNewPlan}) => {

    const dispatch = useDispatch()

    const newPlan = () => {
      dispatch(startNewPlan())
      
    }

  return (
    <div className='no-plan'>
          <h3 className="text-light text-center center-text">Crea un nuevo plan</h3>
          <button className="btn btn-dark boton-posicion" onClick={newPlan}>+</button>
    </div>
  )
}

import React from 'react'
import { WindowPage } from '../components/WindowPage'
import { useDispatch, useSelector } from 'react-redux'
import { CreatePlanComponent } from '../components/CreatePlanComponent'
import { WindowStartComponent } from '../components/windowStartComponent'
import { startNewPlan } from '../../store/prueba/plantillaThunks'

export const PlantillaPage = () => {
    const {isSaving,close,plan} = useSelector(state => state.plantilla)
    const dispatch = useDispatch()

    const onClickNewPlan = () => {
        dispatch(startNewPlan())

    }

 

  return (
    <>
    <WindowPage plan={plan}/>
    {
        (close)?
        <CreatePlanComponent/>
        :<>
        <WindowStartComponent/>
        <button className="btn btn-dark boton-posicion" onClick={onClickNewPlan}>+</button>
         </>
    }
    </>
  )
}

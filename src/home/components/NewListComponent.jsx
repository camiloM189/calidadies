import { useState } from "react"
import { useForm } from "../../hook/useForm"
import { startCloseModal, startNewImprovementPlan } from "../../store/calidadies/thunks"
import { useDispatch, useSelector } from "react-redux"

const searchList = []


export const NewListComponent = () => {
    const dispatch = useDispatch();
    const {onInputChange, addSearch} = useForm(searchList)
    const {improvementPlan} = useSelector(state => state.calidadies);

    const searchSubmit = (event) => {
      event.preventDefault();
      dispatch(startNewImprovementPlan({addSearch}));

      
    }
    const closeModal = () => {
      dispatch(startCloseModal())

    }
  

  return (
   
    <div className="modal-list  border border-1 border-bottom-0 border-end-0 border-start-0 border-dark" >
          <div className="mb-3 mt-5 ms-5 me-5">
            <label  className="form-label">Plan de mejoramiento</label>
            <form onSubmit={searchSubmit}>
            <input type="text" 
              className="form-control"
              placeholder="ingrese su oportunidad de mejora"
              value={addSearch}
              name="addSearch"
              onChange={onInputChange}
              />
              <button className="btn btn-primary mt-3 mb-3" type="submit">Agregar</button>

              </form>
              <ol>
                {
                  improvementPlan.map(improvement => (
                    <li>{improvement.addSearch}</li>
                  ))
                }
              </ol>
              <button className="btn btn-danger mt-3 mb-3" type="submit" onClick={closeModal}>Cerrar</button>

    </div>

        
  </div>
  )
}

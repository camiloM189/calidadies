import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hook/useForm';
import { startNewImprovementPlan } from '../../store/calidadies/thunks';
const title = '';


export const AddListPage = ({onLabel}) => {
  const dispatch = useDispatch()
  const {improvementPlan} = useSelector(state => state.calidadies);
  const {addTitle,onInputChange} = useForm(title)

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startNewImprovementPlan({addTitle}))

  }


  return (
    <div className='cuadrado'>

    <div className='cuadrado border border-1 border-start-0 border-bottom-0 border-dark p-4'>
    <h3>Denominacion</h3>
    <div className="mb-3">
  
    <form onSubmit={onSubmit}>
  <label  className="form-label">Plan de mejoramiento</label>
  <input type="text" 
      className="form-control"
      placeholder="ingrese su oportunidad de mejora"
      value={addTitle}
      name='addTitle'
      onChange={onInputChange}
  />
  <button
      className="btn btn-outline-primary btn-block"type="submit" 
  >
      <i className="far fa-save"></i>
      <span> Guardar </span>
  </button>
  </form>
  </div>

  

  <button className="btn btn-outline-primary btn-block agregar"type="button" onClick={onLabel} >+
  
  </button>


  
  <ol className='mt-4'>{
            improvementPlan.map(improvement => (
              <li>{improvement.addSearch}</li>
            ))
        
          }
        
        </ol>
</div>
    
      
    
</div>
  )
}

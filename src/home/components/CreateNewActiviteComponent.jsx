import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hook/useForm'
import { startClose, startCreateActivitie, startSavingActivitie } from '../../store/actividades/actividadesThunks';
import { WindowPage } from './WindowPage';

import Swal from 'sweetalert2';

export const CreateNewActiviteComponent = () => {
    const {actividades,active,currentItem,errorMessage} = useSelector(state => state.actividades);
    const dispatch = useDispatch();
    const {onInputChange,itemTitle,formState,onResetForm} = useForm('');
    const {title,onResetForm:resetTitle,onInputChange:inputChange} = useForm('');

    const [click,setClick] = useState(1);


    const onSubmitTitle = (event) => {
      event.preventDefault();
      setClick(click + 1);
      if(itemTitle.length === 0) return;
      
      dispatch(startCreateActivitie({itemTitle,click}));
      onResetForm();
    }
    const buttonSaving = (event) => {
      event.preventDefault()

      if(title === undefined) {
        Swal.fire('Error se necesita un titulo',errorMessage,'error');
        return;
      }
      dispatch(startSavingActivitie({title}))
      Swal.fire('El plan de mejoramiento se creo con exito',errorMessage,'success');
    
    }
    const buttonBack = () => {
        dispatch(startClose())
    }
     
  return (
    <>

    <div className='cuadrado'>

          <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 border-dark p-4'>
          <h3 className='ms-5'>Denominacion</h3>
          <div className="mb-3 ms-5">
        
          <form onSubmit={buttonSaving} >
        <label className="form-label">Escriba su oportunidad de mejora identificada</label>
        <input type="text" 
            className="form-control"
            placeholder="ingrese su oportunidad de mejora"
            value={title}
            onChange={inputChange}
            name='title'
        />
        
        <button
            className="btn btn-outline-primary btn-block boton-guardar" type='submit'
            
        >
            <i className="far fa-save"></i>
            <span> Guardar </span>
        </button>
        </form>  
        <button className='btn btn-outline-danger btn-block boton-regresar' onClick={buttonBack}>
            Regresar
        </button>   
        <div className='border border-1 border-black mb-3 mt-4'>
          <h3 className='ms-3 text-center'>Actividades</h3>
             <ol className=''>
              {
                active?.map(act => (
              <li>
                <button className="botonTitleItem mb-2">
                  {act}
                </button>
              </li>
                  
                ))
              } 
          </ol>   
          </div>
        <form onSubmit={onSubmitTitle}>
        
          <input type="text" 
          placeholder='Escriba un punto de la lista'
          className="form-control"
          value={itemTitle || ''}
          name='itemTitle'
          onChange={onInputChange}
          />
          <button type="submit" className='btn btn-outline-primary btn-block mt-1 mb-2'>Agregar</button>
        </form>

        </div>
      </div>     
      </div>
</>
  )
}

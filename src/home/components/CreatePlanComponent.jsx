import React, { useEffect, useState } from 'react'
import { useForm } from '../../hook/useForm'
import { onActivePlan } from '../../store/prueba/plantillaSlice'
import { useDispatch, useSelector } from 'react-redux'
import { startListItemTitle, startSavingPlan } from '../../store/prueba/plantillaThunks'

const list = [{
      listItem:{
        listItemTitle:[

        ]
      }
 
  }]
const arrayTitle = []


   
export const CreatePlanComponent = () => {
    const {active:note,plan} = useSelector(state => state.plantilla)
    const {formState,onInputChange,title,listItemTitle} = useForm(note);
    const [arrayListTitle, setArrayListTitle] = useState(arrayTitle);
    const [click, setClick] = useState(1)
    const [replace, setReplice] = useState(1)

    const [{_id,list}] = plan;
    const {listItem} = list
    // let listImprim = [listItem.titleItem]
    // console.log(listItem.titleItem);
    console.log(listItem);
    

    const dispatch = useDispatch()

    const submitCreateTitleItem = (event) => {
         event.preventDefault()
         setReplice(replace + 1)
         setClick(click + 1)
         dispatch(startListItemTitle({listItemTitle,_id,click,replace}))

    }
    const savingPLan = (event) => {
      event.preventDefault()
      dispatch(startSavingPlan({title,_id}))
    }

 

  return (
    
    <div className='cuadrado'>

          <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 border-dark p-4'>
          <h3 className='ms-5'>Denominacion</h3>
          <div className="mb-3 ms-5">
        
          <form >
        <label className="form-label">Escriba el titulo</label>
        <input type="text" 
            className="form-control"
            placeholder="ingrese su oportunidad de mejora"
            value={title}
            onChange={onInputChange}
            name='title'
          
        />
        <button className='btn btn-outline-danger btn-block boton-regresar'>
            Regresar
        </button>
        <button
            className="btn btn-outline-primary btn-block boton-guardar" type='button'
            onClick={savingPLan}
        >
            <i className="far fa-save"></i>
            <span> Guardar </span>
        </button>
        </form>
      
        
        <div className='border border-1 border-black mb-3 mt-4'>
          <h3 className='ms-3 text-center'>Tareas a realizar</h3>
          {/* <ol className=''>
               {
                list?.map(lisTitle => (
                    <li>{lisTitle.listItem.titleItem}</li>
                  
                ))
              }
          </ol> */}
          </div>
        <form onSubmit={submitCreateTitleItem}>
          <label>Agregue un punto a la lista</label>
          <input type="text" 
          placeholder='Escriba un punto de la lista'
          className="form-control"
          value={listItemTitle}
          name='listItemTitle'
          onChange={onInputChange}
          />
          <button type="submit" className='btn btn-outline-primary btn-block mt-1 mb-2'>Agregar</button>
        </form>

        </div>
      </div>     
      </div>



  )
}

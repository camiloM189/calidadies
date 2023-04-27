import { WindowPage } from '../components/WindowPage'
import { useForm } from '../../hook/useForm'
import { startCloseModal, startClosePlan, startOpenModal, startSaveNewPlan } from '../../store/calidadies/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NewPlanPage } from '../components/NewPlanPage';
import { useEffect, useState } from 'react';
import { ActivePlan } from './ActivePlan';
import { openList } from '../../store/calidadies/calidadiesSlice';

const notePlan = [{
  title:'soy un titulo',
  list:[{
    listItem:{
      listItemTitle:'soy un titulo'
    }
  }]

}

]

  


export const DenominacionPage = () => {
 const dispatch =  useDispatch()
 const {statusModal,newPlan,isModel,plan,selectPlan} = useSelector(state => state.calidadies)
 const [ titleListArray, setTitleListArray ] = useState([]);

 const {onInputChange,addTitle,addTitleList,onResetForm,formState} = useForm(notePlan);
  //  const {list}= plan

  
   const onLabel = () => {
        dispatch(startOpenModal())
       

   }
   const closeLabel = () => {
        dispatch(startCloseModal())
       

   }
   const comparacion = () => {
    // const result = plan.filter(pla => pla.id  === _id);
    const [{list}] = plan;

    const [{listItem}] = list
    const {titleItem} = listItem
  
    console.log(titleItem);

   }
   if(plan.length > 0 ){
    comparacion()

   }
   useEffect(() => {
    dispatch(openList(formState))
  
    
  }, [formState])
  console.log(formState);

   const onSubmitTitle = (event) => {
    event.preventDefault()
    if(addTitle.length <= 0) return;
    dispatch(startSaveNewPlan({addTitle,addTitleList:titleListArray}))
    dispatch(startClosePlan())
    setTitleListArray([])
    onResetForm()
   }
   
   const onSubmitTitleList = (event) => {
    event.preventDefault();
    if(addTitleList.length <= 0) return;
    setTitleListArray([...titleListArray,addTitleList])



     
   }
   const closeList = () => {
      dispatch(startClosePlan())

   }


  return (
    <>
 
      
     {/* <AddListPage onLabel={onLabel}/> */}
    
        <WindowPage plan={plan} isModel={isModel}/>

        {
          (newPlan)
          ? <div className='cuadrado'>

          <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 border-dark p-4'>
          <h3 className='ms-5'>Denominacion</h3>
          <div className="mb-3 ms-5">
        
          <form onSubmit={onSubmitTitle}>
        <label  className="form-label">Escriba el titulo</label>
        <input type="text" 
            className="form-control"
            placeholder="ingrese su oportunidad de mejora"
            value={addTitle}
            name='addTitle'
            onChange={onInputChange}
        />
        <button className='btn btn-outline-danger btn-block boton-regresar' onClick={closeList}>
            Regresar
        </button>
        <button
            className="btn btn-outline-primary btn-block boton-guardar" type="submit" 
            
        >
            <i className="far fa-save"></i>
            <span> Guardar </span>
        </button>
        </form>
      
        
        <div className='border border-1 border-black mb-3 mt-4'>
          <h3 className='ms-3 text-center'>Tareas a realizar</h3>
          <ol className=''>

             {
              (!selectPlan) ?
              titleListArray?.map(plan => (
                <Link className='color-black list-button mt-5'>
                  <li className='text-dark lista-mejoramiento'>{plan}
                  </li>
                </Link>
                  
              ))
              :
              plan?.map(pla => (
                <Link className='color-black list-button mt-5'>
                  <li className='text-dark lista-mejoramiento'>{JSON.stringify(pla)}
                  </li>
                </Link>
                  
              ))
            } 
          </ol>
          </div>
        <form onSubmit={onSubmitTitleList}>
          <label className={(statusModal) ? 'form-label mt-1' : 'add-list'}>Agregue un punto a la lista</label>
          <input type="text" 
          placeholder='Escriba un punto de la lista' className={(statusModal) ? 'form-control me-5' : 'add-list'
          }
          value={addTitleList}
          name='addTitleList'
          onChange={onInputChange}
          
          />
          <button type="submit" className={(statusModal) ? 'btn btn-outline-primary btn-block mt-1 mb-2' : 'add-list'}>Agregar</button>
        </form>
        <button className="btn btn-outline-primary btn-block agregar"type="button" onClick={onLabel} >+
        </button>
        <button className={(statusModal) ? 'btn btn-outline-danger btn-block agregar ms-3' : 'add-list'}type="button" onClick={closeLabel} > -
        </button>
        </div>
      </div>     
      </div>
      : <NewPlanPage/>
        }
       

    </>
  )
}

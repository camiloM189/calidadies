import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { openList } from "../../store/calidadies/calidadiesSlice";
import { useEffect } from "react";
import { startListPlan } from "../../store/calidadies/thunks";


export const WindowPage = (isModel) => {
  const dispatch = useDispatch()
  const {plan,active} = useSelector(state => state.plantilla)


  
  // const listTitle = [title]



  // const desectructurar = () => {
  //   if(plan.length > 0){
  //     const [{list,title,id}] = plan;
  //     const [{listItem}] = list
  //     const {titleItem} = listItem
  //     return{
  //       list,title,id
  //     }
  // }
 
  // }
    // const onClick = () => {
    //   const {list,title,id} = desectructurar()
    //   console.log(title,id);
    //   dispatch(startListPlan({list,title,id}))

    // }
  
    // dispatch(setActiveNote({title,body,id,date,imageUrls}));

  return (
    
    <>
        <div className='window border border-1 border-bottom-0 border-dark'>
            <h5 className="ms-3 mt-3">Plan De mejoramiento</h5>
            <hr />
         { (isModel)
         ?
         <>
      
          <Link className='color-black list-button ms-2'>
      
          {/* {
            //intento de mapear active que salio mal xd pd:esto es un recordatorio 
            //por tu meomoria de mierda
            //hay otro error aqui de no poder poner los titulos cuando se guarda
            (active !== null) ?
          
            
           plan?.map(listTitle => (
            <div>
            <button className="btn btn-dark mb-2 listas-cuadrado" >{listTitle.title}</button>
            </div>
           

           )):
           <div></div>
                
          }  */}
         

      
          </Link>
     
          </>
          :
          <div></div>
          }
          
        </div>
    
    
    
    
    
    
    </>
  )
}

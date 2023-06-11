import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { startGetItemById } from "../../store/actividades/actividadesThunks";




export const WindowPage = () => {
  const dispatch = useDispatch()
  const {actividades,close} = useSelector(state => state.actividades)
  const [activeTitle, setActiveTitle] = useState('')



  const onClick = (_id,title) => {
      // dispatch(startGetItemById({_id}));
      setActiveTitle(title)
  }
  
  


  return (
    
 
    <div className='window border border-1 border-bottom-0 border-dark'>
    <h5 className="ms-3 mt-3">Plan De mejoramiento</h5>
    <hr />
    <div className='list-button '>
      {
        (close) ? 
        <ul>
        {
          actividades?.map(active => (
          <li className="mb-4" >
            <Link to={`/homepage/view/${active._id}`}>
              <button className="btn btn-dark mb-2 listas-cuadrado"
               onClick={() => onClick(active._id,active.title)}> 
               {active.title}
              </button>
             </Link>
          </li>
                
          ))
        }
    </ul>
    : <></>
      }
    </div>
  </div>
    );
    
      
     
         
          
      

  
  
}

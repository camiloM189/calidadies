import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { startGetItemById, startItemEventId, startViewGetItemById } from "../../store/actividades/actividadesThunks";
import { onActiveClear } from "../../store/actividades/actividadesSlice";


export const SetEventComponent = () => {
    const {currentItem,activeListSelect} = useSelector(state => state.actividades);
    const dispatch = useDispatch();
    const {_id:pagina} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(onActiveClear()) 

        dispatch(startViewGetItemById({_id:pagina}));
      
    }, [pagina])


    const buttonId = (_id,title) => {
      dispatch(onActiveClear());
      // dispatch(startItemEventId({_id,pagina}))
      navigate(`/homepage/${pagina}/${_id}`);

    }
    
    const actualizaClearButton = () => {
        dispatch(onActiveClear()) 
        navigate(`/homepage/actualizar/${pagina}`);

    }
 
    
    return (
      <>
      <div className="d-flex flex-column min-vh-100">
    <div className=''>
    <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 border-dark p-4'>
      <h1 className='ms-5'>{currentItem.title}</h1>
      <div className="d-flex flex-row-reverse">
        <button className="btn btn-outline-danger ms-5" onClick={actualizaClearButton}>
          <i class="bi bi-pencil-square editButton"></i>
          <span> editar</span>
        </button>
      </div>
      <div className="mb-3 ms-5">
        <Link to='/homepage/Aspectoscurriculares'>
          <button className='btn btn-outline-danger btn-block boton-regresar'>
              Regresar
          </button>
        </Link>
        <div className='border border-1 border-black mb-3 mt-4'>
          <h3 className='ms-3 text-center'>Tareas a realizar</h3>
          <ol className=''>
            {activeListSelect?.map(act => (
              <li>
                <button className="botonTitleItem mb-2"onClick={() => buttonId(act._id,act.titleItem)}>
                {act.titleItem}
              </button>
              </li>
            ))}  
          </ol>    
        </div>
        <br />
          <br />
          <br />
      </div>
    </div>     
  </div>
</div>
      </>
    )
}

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { startDeleteItem, startEditName, startItemEventId, startUpdateItem } from "../../store/actividades/actividadesThunks";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "../../hook/useForm";


export const EditMetas = () => {
    const navigate = useNavigate();
    const {pagina,_id} = useParams();
    const dispatch = useDispatch();
    const {onInputChange,title} = useForm('');
    useEffect(() => {
        dispatch(startItemEventId({_id,pagina}));
        dispatch(startUpdateItem({_id,pagina}));
      }, [_id]);

    const {ItemSet,errorMessage} = useSelector(state => state.actividades);
    const {metas} = ItemSet;

    const backButton = () => {
        navigate(`/homepage/${pagina}/${_id}`);
    }

    const deleteItem = () => {
        dispatch(startDeleteItem({pagina,_id}));
        navigate(`/homepage/Aspectoscurriculares`);
        Swal.fire('El item se elimino correctamente',errorMessage,'success');
       }
    
    const actTitle = (event) => {
      event.preventDefault();
      dispatch(startEditName({title,pagina,_id}))
      navigate(`/homepage/647b85ab28e08bae8c3552f5/647b8c4c47f09f569d7fe733`);
      Swal.fire('El titulo se actualizo correctamente',errorMessage,'success');


     

    }


  return (
    <div className="d-flex flex-column min-vh-100">
    <div className=''>
    <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 
    border-dark p-4'>
         <div className="d-flex flex-row-reverse">
       
       <button className="btn btn-outline-danger ms-5"onClick={deleteItem}>
       <i className="bi bi-trash"></i>
         <span> Borrar </span>
       </button>
     </div>
      <h1 className=''>{ItemSet.titleItem}</h1>
      <form className="ms-3 me-3" onSubmit={actTitle} >
        <label className="form-label"></label>
        <input type="text" 
            className="form-control"
            placeholder="Edite el titulo "
            name="title"
            onChange={onInputChange}
            value={title}
        />
        
        <button
            className="btn btn-outline-primary btn-block boton-guardar" type='submit'
            
        >
            <i className="far fa-save"></i>
            <span> Guardar </span>
        </button>
        </form> 
     
      <div className="mb-3 ms-3">
    
          <button className='btn btn-outline-danger btn-block boton-regresar' onClick={backButton}>
              Regresar
          </button>
   
        <div className='border border-1 border-black mb-3 mt-4'>
          <h3 className='ms-3 text-center'>Metas</h3>
           <ol className=''>
             {metas?.map(act => (
              <li>
                <button className="botonTitleItem mb-2">
                {act.metaTitle}
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
  )
}

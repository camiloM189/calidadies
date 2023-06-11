import { useEffect, useState } from "react";
import { useForm } from "../../hook/useForm";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startDeleteActividades, startGetItemById, startUpdateActivitie, startUpdateListItem } from "../../store/actividades/actividadesThunks";
import { onActiveClear } from "../../store/actividades/actividadesSlice";
import Swal from "sweetalert2";



export const ActualizarActiviteComponent = () => {
  const { updateTitlte, updateList, onInputChange, onResetForm } = useForm('');
  const { currentItem, active, guardar,errorMessage } = useSelector(state => state.actividades);
  const dispatch = useDispatch();
  const { _id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(startGetItemById({ _id }));

  }, [_id])


  const onSubmitUpdateTitle = (event) => {
    event.preventDefault()
    dispatch(startUpdateActivitie({ _id, title: updateTitlte }));
    Swal.fire('El plan de mejoramiento se actualizo con exito',errorMessage,'success');
    navigate(`/homepage/Aspectoscurriculares`);
    
  }
  const onSubmitUpdateTitleList = (event) => {
    event.preventDefault();
    dispatch(startUpdateListItem({ itemTitle: updateList }));
    onResetForm();
  }
  const buttonId = (title) => {
    dispatch(onActiveClear())
  }

  const deleteButton = () => {
    dispatch(startDeleteActividades({ _id }));
    navigate(`/homepage/Aspectoscurriculares`);
    Swal.fire('El plan de mejoramiento se elimino con exito',errorMessage,'success');
    

  }
 

  return (
    <>
      <div className=''>
        <div className='cuadrado border border-1 border-start-0 border-end-0 border-bottom-0 border-dark p-4'>
          <h1 className='ms-5'>Editar</h1>
          <div className="d-flex flex-row-reverse">
            <button className="btn btn-outline-danger ms-5" type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-trash"></i>
              <span>Borrar</span>
            </button>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Borrar</h1>
                </div>
                <div class="modal-body">
                  ¿Seguro que quieres borrar esta actividad?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal" 
                  onClick={deleteButton}
                  >Borrar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 ms-5">
            <form onSubmit={onSubmitUpdateTitle}>
              <label className="form-label">editar Titulo</label>
              <input type="text"
                className="form-control"
                placeholder={`${currentItem.title || ''}`}
                value={updateTitlte}
                name="updateTitlte"
                onChange={onInputChange}
              />
              <Link to={`/homepage/view/${_id}`}>
                <button className='btn btn-outline-danger btn-block boton-regresar'>
                  Regresar
                </button>
              </Link>
              <button
                className="btn btn-outline-primary btn-block boton-guardar" type='submit'
              >
                <i className="far fa-save"></i>
                <span> Guardar </span>
              </button>
            </form>
            <div className='border border-1 border-black mb-3 mt-4'>
              <h3 className='ms-3 text-center'>Tareas a realizar</h3>
               <ol className=''>
            {active?.map(act => (
              <li>
            
                <button className="botonTitleItem mb-2">
                {act}
              </button>
           
              </li>
            ))}  
          </ol>  
            </div>
            <form onSubmit={onSubmitUpdateTitleList} className="mb-5">
              <label>Agregue un punto a la lista</label>
              <input type="text"
                placeholder='Escriba un punto de la lista'
                className="form-control mb-3"
                value={updateList || ''}
                name="updateList"
                onChange={onInputChange}
              />
              <button type="submit" className='btn btn-outline-primary btn-block mt-1 mb-5'>Agregar</button>
              <br />
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

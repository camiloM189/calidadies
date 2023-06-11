import { useNavigate, useParams } from "react-router-dom";
import { WindowNotesEventsComponent } from "./WindowNotesEventsComponent"
import { useEffect, useState } from "react";
import { startDeleteMetas, startItemEventId, startUpdateItem } from "../../store/actividades/actividadesThunks";
import { useDispatch, useSelector } from "react-redux";
import { SetActiveNote } from "./SetActiveNote";
import Swal from "sweetalert2";



export const NotNoteComponent = () => {
  const navigate = useNavigate();
  const {pagina,_id,id} = useParams();
  const dispatch = useDispatch();
  const {active,metas} = useSelector(state => state.notes);
  const {errorMessage,ItemSet} = useSelector(state => state.actividades);
  
  useEffect(() => {
    dispatch(startItemEventId({_id,pagina}));
    dispatch(startUpdateItem({_id,pagina,id}));

  }, [id])

  const addNotes = () => {
    navigate(`/homepage/${pagina}/${_id}/${id}/create`);
  }
  const backButton = () => {
    navigate(`/homepage/${pagina}/${_id}`);
  } 
  const deleteButton = () => {
    dispatch(startDeleteMetas({_id,pagina,id}));
    navigate(`/homepage/${pagina}/${_id}`);
    Swal.fire('El item se elimino correctamente',errorMessage,'success');
  } 


  
    
  return (
    <>
  <WindowNotesEventsComponent/>
    {
      (active) ?
      <SetActiveNote/>
      : <div className='noNote'>
        <h1 className="text-light text-center center-text">{metas}</h1>
      <h3 className="text-light text-center center-text">Crea una nota</h3>
      <button className="btn btn-danger boton-borrar-metas" type="button" onClick={deleteButton}
  data-bs-toggle="modal"data-bs-target="#exampleModal" >
    <i className="bi bi-trash"></i>
    <span>Borrar</span>
    </button>
   
      <button className="btn btn-dark boton-posicion" onClick={addNotes}>+</button>
      <button className="btn btn-danger boton-back" onClick={backButton}>Volver</button>
      
      </div>
    }
   
    </>
  )
}

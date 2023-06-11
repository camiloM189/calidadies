import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate, useParams } from "react-router-dom";
import { startActEvent, startDeleteItem, startItemEventId, startSaveEvents, startUpdateItem } from "../../store/actividades/actividadesThunks";
import { useEffect, useState } from "react";
import { useForm } from "../../hook/useForm";
import Swal from "sweetalert2";



export const CreateEventComponent = () => {
  const dispatch = useDispatch();
  const {pagina,_id} = useParams();
  const {ItemSet,objeto,itemUpdate,errorMessage} = useSelector(state => state.actividades);
  const navigate = useNavigate();
  const [firt, setFirts] = useState([]);
  const [totalCont, setTotalCont] = useState(0)
  
  let {onInputChange,actEvent,fecha,fecha2,fecha3,fecha4,
    fecha5,fecha6,fecha7,onResetForm
  } = useForm('');
  useEffect(() => {
    dispatch(startItemEventId({_id,pagina}));
    dispatch(startUpdateItem({_id,pagina}));

  }, [_id])



  useEffect(() => {
    if(itemUpdate.length > 0){
      const [{listItem}] = itemUpdate;
      const {metas} = listItem;


      setFirts(metas)
     } 
  }, [itemUpdate])

  const backButton = () => {
    navigate(`/homepage/view/${pagina}`);
    }  
   
   
  const onSubmit = (event) => {
    event.preventDefault()
    if(actEvent.length === 0) return;
    if(fecha === undefined) {
       fecha = 0
    };
    if(fecha2 === undefined) {
        fecha2 = 0
    };
    if(fecha3 === undefined) {
        fecha3 = 0
    };
    if(fecha4 === undefined) {
      fecha4 = 0
    };
    if(fecha5 === undefined) {
    fecha5 = 0
    };
    if(fecha6 === undefined) {
      fecha6 = 0
    };
    if(fecha7 === undefined) {
      fecha7 = 0
    };
    dispatch(startActEvent({pagina,_id,actEvent,fecha,fecha2,fecha3,fecha4,
      fecha5,fecha6,fecha7}));
    dispatch(startSaveEvents({pagina,_id}));
    onResetForm()

  }
   const buttonIndicador = (id) => {
    navigate(`/homepage/${pagina}/${_id}/${id}`)
   } 
   const deleteItem = () => {
    dispatch(startDeleteItem({pagina,_id}))
    navigate(`/homepage/Aspectoscurriculares`);
    Swal.fire('El item se elimino correctamente',errorMessage,'success');
   }
   const editMeta = () => {
    navigate(`/homepage/${pagina}/${_id}/edit`)
   }
 
  return (
    <>
    
  <div className=" container mt-5">
  <div className="row">
    <h2 className="mb-3">{ItemSet.titleItem}</h2>
    <div className="col-1 cuadradoItem border border-2 border-dark">Indicador</div>
    <div className="col-1 cuadradoItem border border-2 border-dark">{ItemSet.start}</div>
    <div className="col-1 cuadradoItem border border-2 border-dark">{ItemSet.start + 1}</div>
    <div className="col-1 cuadradoItem border border-2 border-dark">{ItemSet.start + 2} </div>
    <div className="col-1 cuadradoItem border border-2 border-dark">{ItemSet.start + 3} </div>
    <div className="col-1 cuadradoItem border border-2 border-dark">{ItemSet.start + 4} </div>
    <div className="col-1 cuadradoItem border border-2 border-dark">{ItemSet.start + 5} </div>
    <div className="col-1 cuadradoItem border border-2 border-dark">{ItemSet.start + 6} </div>
    <div className="col-1 cuadradoItem border border-2 border-dark">Porcentaje</div>
   
    </div> 
    </div> 

    {
        firt?.map(event => (
          <>
      <div className=" container">

        <div className="row">

          <div className={`col-1 cuadradoItem border border-2 border-dark ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>
            <button className={`botonCuadroItem ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`} onClick={() => buttonIndicador(event._id)} >
            {event.metaTitle}</button>
          </div>
          <div className={`col-1 cuadradoItem border border-2 border-dark ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha}</div>
          <div className={`col-1 cuadradoItem border border-2 border-dark ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha2}</div>
          <div className={`col-1 cuadradoItem border border-2 border-dark ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha3}</div>
          <div className={`col-1 cuadradoItem border border-2 border-dark ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha4}</div>
          <div className={`col-1 cuadradoItem border border-2 border-dark ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha5}</div>
          <div className={`col-1 cuadradoItem border border-2 border-dark ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha6}</div>
          <div className={`col-1 cuadradoItem border border-2 border-dark ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{event.fecha7}</div>
          <div className={`col-1 cuadradoItem border border-2 border-dark ${(event.totalNota === event.total) ? 'bg-success text-light' : ' '}`}>{`${event.totalNota} / ${event.total}`}</div>

         
          </div>
          </div>

          </>
        ))
    
    }
 


  <h2 className="text-center">Proyeccion de Eventos</h2>
  <form className="input-group mb-3 container mt-5"onSubmit={onSubmit}>
  
  <input type="text" className="form-control"
   placeholder="Indicador" aria-label="Username"
   onChange={onInputChange}
   value={actEvent || ''}
   name="actEvent"
   />
   

  <input type="number" className="form-control"
   placeholder="Primer año" aria-label="Username"
   onChange={onInputChange}
   value={fecha || ''}
   name="fecha"
   />
   

   <input type="number" className="form-control"
   placeholder="Segundo año" aria-label="Username"
   onChange={onInputChange}
   value={fecha2 || ''}
   name="fecha2"
   />
   <input type="number" className="form-control"
   placeholder="Tercer año" aria-label="Username"
   onChange={onInputChange}
   value={fecha3 || ''}
   name="fecha3"
   />
   <input type="number" className="form-control"
   placeholder="Cuarto año" aria-label="Username"
   onChange={onInputChange}
   value={fecha4 || ''}
   name="fecha4"
   />
   <input type="number" className="form-control"
   placeholder="Quinto año" aria-label="Username"
   onChange={onInputChange}
   value={fecha5 || ''}
   name="fecha5"
   /><input type="number" className="form-control"
   placeholder="Sexto año" aria-label="Username"
   onChange={onInputChange}
   value={fecha6 || ''}
   name="fecha6"
   /><input type="number" className="form-control"
   placeholder="Septimo año" aria-label="Username"
   onChange={onInputChange}
   value={fecha7 || ''}
   name="fecha7"
   />
  <button type='submit' className="btn btn-primary">Agregar</button>
    
  </form>
  <button className="btn btn-danger boton-back-evento" onClick={backButton}>Volver</button>

  <button className="btn btn-outline-danger ms-5 editatMetas " type="button"
  data-bs-toggle="modal"data-bs-target="#exampleModal" onClick={editMeta}>
    {/* <i className="bi bi-trash"></i> */}
    <span>Editar</span>
  </button>

  <button className="btn btn-outline-danger ms-5 boton-borrar-item " type="button"
  data-bs-toggle="modal"data-bs-target="#exampleModal" onClick={deleteItem}>
    <i className="bi bi-trash"></i>
    <span>Borrar</span>
  </button>

  </>
    
  )
}

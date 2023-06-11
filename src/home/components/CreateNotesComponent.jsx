
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { WindowNotesEventsComponent } from "./WindowNotesEventsComponent";
import { useForm } from "../../hook/useForm";
import { useDispatch, useSelector } from "react-redux";
import { StartNotes, startUpdate, startUpdateFiles } from "../../store/actividades/notesThunks";
import { useNavigate, useParams } from "react-router-dom";
import { startItemEventId, startUpdateItem } from "../../store/actividades/actividadesThunks";
import { useEffect, useState } from "react";
import { FileComponent } from "./FileComponent";
import { FaFilePdf, FaFileArchive  } from 'react-icons/fa';

export const CreateNotesComponent = () => {
  const {onInputChange,title,body} = useForm('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { _id,pagina,id } = useParams();
  const {file} = useSelector(state => state.notes);
  const [type, setType] = useState(false)
  

 
  useEffect(() => {
    dispatch(startItemEventId({_id,pagina}));
    dispatch(startUpdateItem({_id,pagina}));

  }, [_id])

  
  const save = () => {
    dispatch(StartNotes({title,body,_id,pagina,id,}));
    navigate(`/homepage/${pagina}/${_id}/${id}`);
  }

  const buttonBack = () => {
    navigate(`/homepage/${pagina}/${_id}/${id}`);
  }
  const fileData = (event) => {
    const file = event.target.files[0];
    dispatch(startUpdateFiles({file}));
  }




return (
  <>
  <WindowNotesEventsComponent/>
  <div className="container  windowNotes">
  <div className="mb-3">
  <label for="exampleFormControlInput1 " className="form-label text-light mt-3">Notes Title</label>
  <input type="text" className="form-control"
   id="exampleFormControlInput1" 
   placeholder="Titulo"
   value={title}
   onChange={onInputChange}
   name="title"
   />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label text-light">Body Note</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
  value={body}
  onChange={onInputChange}
  name="body"
  ></textarea>
</div>
</div>

<div className="imagenArchivo">
  <div className="container text-center">
    <div className="row">
      {file.map((url) => (
        <div className="col col-xs-5 col-md-3 col-lg-2">
          {url.resource_type === 'raw' ? (
            <>
              <div className="color-danger">
              
                <FaFileArchive size={70} className="pdf-icon" />
                <i>{url.original_filename}</i>
              </div>
            </>
          ) : (
            <>
             
              {url.format === 'pdf' ? (
             
                <>
                
                <div className="color-danger">
                <FaFilePdf  size={70} className="pdf-icon" />
                <i>{url.original_filename}</i>
                </div>
               </>
              ) : (
      
                <div>
                  <img className="img-fluid" src={url.url} alt={url.url} />
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</div>



<button
className="btn btn-outline-light btn-block boton-guardar" type='submit' onClick={save} >
            <i className="far fa-save"></i>
            <span> Guardar </span>
</button>
<button
className="btn btn-outline-danger btn-block boton-back" type='submit' onClick={buttonBack}>
<span> Volver </span>
</button>
<div className="mb-3 subirArchivos mb-5">
  <form onChange={fileData}>
 <input type="file"/>
 </form>
  </div>
  </>
)
}

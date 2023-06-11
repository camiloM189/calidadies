import { useDispatch, useSelector } from "react-redux";
import { getNotes, startBack, startDeleteNote, startUpdateFiles, updateNotes } from "../../store/actividades/notesThunks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import calidadiesApi from "../../api/calidadiesApi";
import { FaFileArchive, FaFilePdf } from "react-icons/fa";
import { useForm } from "../../hook/useForm";
import Swal from "sweetalert2";



export const SetActiveNote = () => {
  const { trueNote,file } = useSelector(state => state.notes);
  const { errorMessage } = useSelector(state => state.actividades);

  const dispatch = useDispatch();

  const { pagina, _id, id } = useParams();

  const [{ _id: noteId }] = trueNote;

  const { onInputChange, title, body } = useForm('')

  const buttonBack = () => {
    dispatch(startBack());
  }
  const deleteButton = () => {
    dispatch(startDeleteNote({ pagina, _id, id, noteId }));
  }
  const downloadImage = async (archivo) => {

    if (archivo.resource_type === 'raw') {
      const response = await fetch(archivo.url);
      const blob = await response.blob();

      const link = document.createElement('a');

      link.href = URL.createObjectURL(blob);

      link.download = `${archivo.original_filename}.zip`;

      link.click();
    }
    if (archivo.resource_type === 'image') {
      const response = await fetch(archivo.url);
      const blob = await response.blob();

      const link = document.createElement('a');

      link.href = URL.createObjectURL(blob);

      link.download = `${archivo.original_filename}`;

      link.click();
    }
  };

  const update = () => {
  
    if(title !== undefined && body !== undefined){
      dispatch(updateNotes({pagina, _id, id, noteId , title, body}));
    }else if(title !== undefined){
      dispatch(updateNotes({pagina, _id, id, noteId ,title, 
        body:trueNote[0].body}));
    }else if(body !== undefined){
      dispatch(updateNotes({pagina, _id, id, noteId ,
        title:trueNote[0].noteTitle,body}));
     
      }else{
      dispatch(updateNotes({pagina, _id, id, noteId ,
        title:trueNote[0].noteTitle, body:trueNote[0].body}));
    }
    
   
    dispatch(startBack());
    Swal.fire('la nota se actualizo correctamente',errorMessage,'success');

  }
  const fileData = (event) => {
    const file = event.target.files[0];
    dispatch(startUpdateFiles({file}));

    }




  return (
    <>
      <div className="container  windowNotes">
        <h2 className="text-light mt-2">Fecha: {`${trueNote[0].dia}/${trueNote[0].mes}/${trueNote[0].año}`}</h2>
        <div className="mb-3">
          <div className="d-flex flex-row-reverse">
            <button className="btn btn-outline-danger" type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={deleteButton}
            >
              <i className="bi bi-trash"></i>
              <span>Borrar</span>
            </button>

          </div>
          <label for="exampleFormControlInput1 " className="form-label text-light mt-3">Titulo de Nota</label>
          <input type="text" className="form-control"
            id="exampleFormControlInput1"
            placeholder={trueNote[0].noteTitle}
            value={title}
            onChange={onInputChange}
            name="title"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label text-light">Cuerpo de la Nota</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
            placeholder={trueNote[0].body || ''}
            value={body}
            onChange={onInputChange}
            name="body"
          ></textarea>
        </div>
      </div>
      <div className="imagenArchivo mt-5">
        <div className="container text-center">
          <div className="row">
            {file.map((archivo) => (
              <div className="col col-xs-5 col-md-3 col-lg-2">
                {archivo.resource_type === 'raw' ? (
                  <>
                    <div className="color-danger">

                      <FaFileArchive size={70} className="pdf-icon" onClick={() => downloadImage(archivo)} />
                      <i>{archivo.original_filename}</i>
                    </div>
                  </>
                ) : (
                  <>
                    {archivo.format === 'pdf' ? (
                      <>
                        <div className="color-danger">
                          <FaFilePdf size={70} className="pdf-icon" onClick={() => downloadImage(archivo)} />
                          <i>{archivo.original_filename}</i>
                        </div>
                      </>
                    ) : (
                      <div>
                        <img className="img-fluid" src={archivo.url} alt={archivo.url} onClick={() => downloadImage(archivo)} />
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
        className="btn btn-outline-primary boton-guardar" type='submit' onClick={update} >
        <span> Actualizar </span>
      </button>
      <button
        className="btn btn-outline-danger btn-block boton-back" type='submit' onClick={buttonBack}>
        <span> Volver </span>
      </button>
      <div className="mb-3 editComponent mb-5">
  <form onChange={fileData}>
 <input type="file"/>
 </form>
  </div>

    </>
  )
}

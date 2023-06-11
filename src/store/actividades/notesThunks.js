import Swal from "sweetalert2";
import calidadiesApi from "../../api/calidadiesApi";
import { onItemUpdate } from "./actividadesSlice";
import { onActive, onBack, onCont, onDelete, onFile, onLoandingCont, onNotes, onSetFile, onWindow } from "./notesSlice"

export const StartNotes = ({title,body = '',_id,pagina,id,file}) => {
  return async(dispatch,getState) => {
    const formData = new FormData();
    const { file } = await getState().notes;

    const newqw = {
      noteTitle:title,
      body:body,
      dia:new Date().getUTCDate(),
      mes:new Date().getMonth() + 1,
      año:new Date().getFullYear(),
      file:file,
    }
    const { ItemSet } = await getState().actividades;
    dispatch(onCont());
    const { cont } = await getState().notes;
    const {metas} = ItemSet
    const metaTrue = metas.filter(meta => meta._id === id);
    const [{note}] = metaTrue;
    const updatedMetaTrue = {
      ...metaTrue[0],
      note: [...note,newqw],
      totalNota:cont,
    };
    const { data } = await calidadiesApi.put(`/events/item/${pagina}/${_id}/${id}`,updatedMetaTrue);
    const {eventoActualizado} = data;
    const {list} = eventoActualizado;
    const trueList = list.filter(item => item._id === _id);
    dispatch(onItemUpdate(trueList));
    dispatch(onNotes({title:title,body:body}));
    }
}
export const startDivWindow = ({id}) => {
  return async(dispatch,getState) => {
    const { itemUpdate } = await getState().actividades;
    const [{listItem}] = itemUpdate;
    const {metas} = listItem;
    const metasFilter = metas.filter(meta => meta._id === id);
    const [{note,totalNota}] = metasFilter;
    dispatch(onLoandingCont(totalNota))

    dispatch(onWindow(note));
  }
}
export const startActive = ({_id}) => {
  return async(dispatch,getState) => {
    const { titleNote } = await getState().notes;
    const trueTitloNote = titleNote.filter(Title => Title._id === _id);
    dispatch(onSetFile(trueTitloNote[0].file))
    dispatch(onActive(trueTitloNote));
  }
}
export const startBack = () => {
  return async(dispatch,getState) => {
    dispatch(onBack());
  }
}
export const startDeleteNote = ({pagina,_id,id,noteId}) => {
  return async(dispatch,getState) => {
    const { errorMessage } = await getState().actividades;

    const {data} = await calidadiesApi.delete(`/events/item/${pagina}/${_id}/${id}/${noteId}`);
    const {evento} = data;
    const {list} = evento;
    dispatch(onDelete());
    const { cont } = await getState().notes;
    const listTrue = list.filter(meta => meta._id === _id);
    dispatch(onItemUpdate(listTrue));
    const [{listItem}] = listTrue;
    const {metas} = listItem;
    const metaTrue = metas.filter(meta => meta._id === id);
    const updatedMetaTrue = {
      ...metaTrue[0],
      totalNota:cont,
    };
    const {data:datos} = await calidadiesApi.put(`/events/item/${pagina}/${_id}/${id}`,updatedMetaTrue);
    const {eventoActualizado} = datos;
    const {list:listas} = eventoActualizado;
    const trueList = listas.filter(item => item._id === _id);
    dispatch(onItemUpdate(trueList));
    Swal.fire('la nota se elimino con exito',errorMessage,'success');
    dispatch(onBack());
  }
}
export const getNotes = ({pagina,_id,id,noteId}) => {
  return async(dispatch,getState) => {
    const {data} = await calidadiesApi.get(`/events/item/${pagina}/${_id}/${id}/${noteId}`);
    console.log(data);


  }

}
export const updateNotes = ({pagina,_id,id,noteId,title,body}) => {
  return async(dispatch,getState) => {

    const { trueNote,file } = await getState().notes;


    const newNote = {
      ...trueNote[0],
      noteTitle:title,
      body:body,
      file:file
    } 

    const {data} = await calidadiesApi.put(`/events/item/${pagina}/${_id}/${id}/${noteId}`,newNote);
    const {eventoActualizado} = data;
    const {list:listas} = eventoActualizado;
    const trueList = listas.filter(item => item._id === _id);
    dispatch(onItemUpdate(trueList));


  }
}
export const startUpdateFiles = ({file}) => {
  return async(dispatch,getState) => {
    // const {file} = file;
    const formData = new FormData();
    formData.append('file',file);
    console.log(file);

    const {data} = await calidadiesApi.post(`/events/upload`,formData);
    const {cloudResp} = data;
    console.log(cloudResp);
    dispatch(onFile(cloudResp));

  }
}
export const startUpdate = ({file}) => {
  return async(dispatch,getState) => {
    
    const formData = new FormData();
    formData.append('file',file);
  } 
}

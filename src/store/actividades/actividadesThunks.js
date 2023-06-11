import { useState } from "react"
import calidadiesApi from "../../api/calidadiesApi"
import { closeNewPlan, onActivePLan, onActiveSelect, onClearActividades, onCurrenItem, 
  onItemUpdate, onItemUpdateEvent, onLoanding, onNewPlan, onNewTitleList, 
  onSavingNewPlan, onSetGetItem, onSetGuardar, onSetLisItem, onSetListItems,
   onUpdateActivite } from "./actividadesSlice"
import Swal from "sweetalert2"
import { onEmpy, onMetas } from "./notesSlice"

export const startActividadesThunks = () => {
  return async (dispatch) => {
    dispatch(onNewPlan())
  }
}

export const startCreateActivitie = ({ itemTitle, click }) => {
  return async (dispatch, getState) => {
    const { active } = await getState().actividades;

    const newListTitle = []
    const fechas = new Date().getFullYear();
    newListTitle.push(itemTitle);
    if(active.includes(itemTitle))return;
    dispatch(onNewTitleList({listItem:{ titleItem: itemTitle }}));
    dispatch(onActivePLan(itemTitle))
    dispatch(onSetGuardar({listItem:{ titleItem: itemTitle,start:fechas}}));

  }
}


export const startActEvent = ({actEvent,fecha,fecha2,fecha3,fecha4,fecha5,fecha6,fecha7}) => {
  return async (dispatch, getState) => {
    const id = new Date().getTime()
     const sumaFechas = [fecha, fecha2, fecha3, fecha4, 
      fecha5, fecha6, fecha7].reduce((total, fecha) => total + parseInt(fecha), 0)
    dispatch(onItemUpdateEvent({metaTitle:actEvent,fecha:fecha,fecha2:fecha2,fecha3:fecha3,
      fecha4:fecha4,fecha5:fecha5,fecha6:fecha6,fecha7:fecha7,total:sumaFechas,id:id,totalNota:0}))

  }
}
export const startSaveEvents = ({pagina,_id,}) => {
  return async(dispatch,getState) => {
    const { itemUpdate } = await getState().actividades;
    const {data} = await calidadiesApi.put(`/events/item/${pagina}/${_id}`,itemUpdate[0]);
    const {eventoActualizado} = data;
    const {list} = eventoActualizado;
    const trueList = list.filter(item => item._id === _id);
    dispatch(onItemUpdate(trueList));
 
  }
}





export const startSavingActivitie = ({ title }) => {
  return async (dispatch, getState) => {
    const { actividades,guardar,active } = await getState().actividades;
    const [{list}] = guardar;
  
    const { data } = await calidadiesApi.post('/events', { title, list:list});
    const {evento} = data;
    const {_id} = evento;
     dispatch(startGetList(_id));
     dispatch(startGuardado());
  }
}
export const startGetList = (_id) => {
  return async (dispatch, getState) => {
    const { data } = await calidadiesApi.get(`/events/${_id}`)
    const {evento} = data;
    dispatch(onSetListItems(evento));
  }
}
export const startGuardado = () => {
  return async (dispatch, getState) => {
    const { data } = await calidadiesApi.get('/events')
    const {eventos} = data;
    if(eventos.length === 0) return;
    dispatch(onSavingNewPlan(eventos))
  }
}
export const startGetItemById = ({_id}) => {
  return async (dispatch) => {

    const { data } = await calidadiesApi.get(`/events/${_id}`)
    const {evento} = data;
    const {list} = evento;
  
    for(let i = 0; i < list.length; i++){
      const { listItem } = list[i]
      const {titleItem} = listItem
      dispatch(onSetLisItem(titleItem))
      dispatch(onSetGuardar(list[i]));

    }
    dispatch(onSetGetItem(evento))
  }
}
export const startViewGetItemById = ({_id}) => {
  return async (dispatch) => {
    const { data } = await calidadiesApi.get(`/events/${_id}`)
    const {evento} = data;
    const {list} = evento;
    for(let i = 0; i < list.length; i++){
      const { listItem,_id } = list[i];
      const {titleItem} = listItem;
      dispatch(onSetLisItem(titleItem));
      dispatch(onActiveSelect({titleItem,_id}));

    }
    dispatch(onSetGetItem(evento))
    

  }
}
export const startItemEventId = ({_id,pagina}) => {
  return async (dispatch) => {
    const { data } = await calidadiesApi.get(`/events/${pagina}`);
    const { evento } = data;
    const { list } = evento;
    const trueList = list.filter(item => item._id === _id);
    const [{listItem}] = trueList;
    dispatch(onCurrenItem(listItem))    
  }
}
export const startUpdateItem = ({_id,pagina,id}) => {
  return async (dispatch) => {
  
    const { data } = await calidadiesApi.get(`/events/${pagina}`);
    const { evento } = data;
    const { list } = evento;
    const trueList = list.filter(item => item._id === _id);
    const [{listItem}] = trueList;
    const {metas} = listItem;

    const metaTrue = metas.filter(meta => meta._id === id);

    dispatch(onItemUpdate(trueList)) 
    dispatch(onEmpy())
    dispatch(onMetas(metaTrue[0].metaTitle))

  }
}
export const startUpdateActivitie = ({_id,title}) => {
  return async(dispatch,getState) => {
    const { guardar,active } = await getState().actividades;
    const [{list}] = guardar;

    const { data } = await calidadiesApi.put(`/events/${_id}`,{title,list:list});
    const {eventoActualizado} = data;
   
    dispatch(onLoanding())
    dispatch(onUpdateActivite(eventoActualizado))
  }
}
export const startUpdateListItem = ({itemTitle}) => {
  return async(dispatch,getState) => {
    const { active,errorMessage } = await getState().actividades;
    const fechas = new Date().getFullYear();

    for (let i = 0; i < active.length; i++) {
        if (itemTitle === active[i]) {
          Swal.fire('Error ya esta su titulo en la lista',errorMessage,'error');
          return;
        }
    }
   
    dispatch(onActivePLan(itemTitle))
    dispatch(onSetGuardar({listItem:{ titleItem: itemTitle,start:fechas }}));
  }
}
export const startClose = () => {
  return async(dispatch) => {
    dispatch(closeNewPlan());
  }
}
export const startDeleteActividades = ({_id}) => {
  return async(dispatch) => {
    await calidadiesApi.delete(`/events/${_id}`)
    dispatch(onClearActividades(_id))
  }
}
export const startDeleteItem = ({pagina,_id}) => {
  return async(dispatch) => {
    await calidadiesApi.delete(`/events/item/${pagina}/${_id}`);

  }
}
export const startDeleteMetas = ({pagina,_id,id}) => {
  return async(dispatch) => {


    const {data} = await calidadiesApi.delete(`/events/item/${pagina}/${_id}/${id}`);
    const { evento } = data;
    const { list } = evento;
    const trueList = list.filter(item => item._id === _id);
    const [{listItem}] = trueList;
    dispatch(onItemUpdate(trueList)) 
  }
}
export const startEditName = ({pagina,_id,title}) => {
  return async(dispatch,getState) => {
    let { itemUpdate,ItemSet } = await getState().actividades;

    const [{_id}] = itemUpdate;

    const newItem = {
      ...ItemSet,
      titleItem:title
    }
    const EditItem = [{
      listItem:newItem,
      _id:_id

      
    
  }]

    const {data} = await calidadiesApi.put(`/events/item/${pagina}/${_id}/edit`,EditItem);
    const {eventoActualizado} = data;
    const { list } = eventoActualizado;
    const trueList = list.filter(item => item._id === _id);
    const [{listItem}] = trueList;
    dispatch(onCurrenItem(listItem))    

  }
}
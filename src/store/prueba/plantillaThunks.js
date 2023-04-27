
import { useEffect } from "react"
import calidadiesApi from "../../api/calidadiesApi"
import { onActivePlan, onCloseNewPlan, onNewPlan, onSavingNewPlan } from "./plantillaSlice"


export const startNewPlan = () => {
    return async(dispatch) => {
        dispatch(onSavingNewPlan())
        const newNote = {
            title:'',
            list:[{
                listItem:{
                    titleItem:''
                },
                
            }],
            id:new Date().getTime(),
        }

        
        const {data} = await calidadiesApi.post('/events',newNote)
        const {evento} = data;
        dispatch(onNewPlan(evento))
        dispatch(onActivePlan(evento))
    }
}
export const startListItemTitle = ({_id,listItemTitle,click,replace}) => {
    return async(dispatch) => { 
        console.log(_id);
        const eventos = {
            list:[{
                listItem:{
                    titleItem:''  
                },  
            }],
        }
        for(let i = 0; i < click; i++ ){
                eventos.list.push({listItem:{titleItem:listItemTitle}})
            }
        const {data} = await calidadiesApi.put(`/events/${_id}`,eventos)
        const {eventoActualizado} = data
    
        
    }
}
export const startSavingPlan = ({title, _id}) => {
    return async(dispatch) => {
            const eventoTitulo = [{
                title:title
            }]
            
            const {data} = await calidadiesApi.put(`/events/${_id}`,
            {title:title})
            const {eventoActualizado} = data
            dispatch(onActivePlan(eventoActualizado))
            dispatch(onNewPlan(eventoActualizado))
            dispatch(onCloseNewPlan())
            

           
            // const {data} = await calidadiesApi.post('/events',title)
          
        
        
        // dispatch(onActivePlan(data))
     
        
    
    
    }
}

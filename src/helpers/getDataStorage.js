import { useState } from "react";
import calidadiesApi from "../api/calidadiesApi";


export const getDataStorage = async(_id) => {
    // const [first, setfirst] = useState({})
    // const currentData = JSON.parse(localStorage.getItem('currentItem'));
    const { data } = await calidadiesApi.get(`/events/${_id}`);
    const {evento} = await data;
    const {title,list} = await evento;
    // const currentData = await JSON.parse(localStorage.getItem('currentItem'));
    // const activeData =  await JSON.parse(localStorage.getItem('active'));
    
   
    return{
        title,list
    }
}


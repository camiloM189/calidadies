import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startActive, startDivWindow } from '../../store/actividades/notesThunks';
import { useNavigate, useParams } from 'react-router-dom';

export const WindowNotesEventsComponent = () => {
  const { titleNote } = useSelector(state => state.notes); 
  const { itemUpdate } = useSelector(state => state.actividades); 
  const dispatch = useDispatch()
  const {pagina,_id:__id,id} = useParams();
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(startDivWindow({id}))
  }, [itemUpdate])

  const activeTitleNote = (_id) => {
    dispatch(startActive({_id}))
    navigate(`/homepage/${pagina}/${__id}/${id}`);
    
  }

  return (
    <div className='window border border-1 border-bottom-0'>
    <h5 className="ms-3 mt-3">Notes</h5>
    <hr />
    <div className='list-button '>   
        
    <ul>
      {
        titleNote.map(notes => (
          <li className="mb-4" >

            <button className="btn btn-dark mb-2 listas-cuadrado" onClick={() => activeTitleNote(notes._id)}> 
             {notes.noteTitle}
            </button>
      
        </li>
        ))
      } 
     
      
    
    </ul>
    </div> 
  </div>
  )
}

import { createSlice } from '@reduxjs/toolkit';

export const plantillaSlice = createSlice({
   name: 'plantilla',
   initialState: {
         plan:[],
         messageSaved:'',
         isSaving:false,
         active:null,
         close:false
   },
   reducers: {
      onSavingNewPlan: (state,{payload}) => {
         state.isSaving = true;

   },
      onNewPlan: (state,{payload}) => {
           state.plan.push(payload);
           state.isSaving = false;


   },
      onActivePlan: (state,{payload}) => {
         state.active = payload
         state.messageSaved = '';
         state.close = true;

   },
      onCloseNewPlan: (state,{payload}) => {
         state.close = false;
   },
  
     
   }
});
          

// Action creators are generated for each case reducer function
export const { onNewPlan,onSavingNewPlan,onActivePlan,onCloseNewPlan } = plantillaSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

export const calidadiesSlice = createSlice({
   name: 'calidadies',
   initialState: {
   //  title:'',
   plan:[],
   statusModal:false,
   isSaving:false,
   newPlan:false,
   messageSaved:'',
   isModel:false,
   active:null,
   selectPlan:false,
   //  list:[
      // listItem:{
      //    indicador:null,
      //    listItemTitle:null,
      //    metas:[{
      //       metaTitle:'',
      //       start:null,
      //       end:null
      //    }],
      //    start:null,
      //    end:null
      //    }
   //  ],
    
   },
   reducers: {
    setSaving:(state) => {
        state.isSaving = true;
},

   addNewPlan:(state,{payload}) => {
      state.plan.push(payload)
   
     
},
   createNewPlan:(state,{payload}) => {
      state.newPlan = true;
},
   closeNewPlan:(state) => {
      state.newPlan = false;
      state.isModel = true;
     
},
   openModal:(state) => {
      state.statusModal = true;
},
   closeModal:(state) => {
      state.statusModal = false;
},
   openList:(state,{payload}) => {  
      state.messageSaved = '';
      state.selectPlan = true
},


   }
});
          

// Action creators are generated for each case reducer function
export const { setSaving,openModal,closeModal,
   addNewPlan,createNewPlan,closeNewPlan,saveList,openList }
    = calidadiesSlice.actions;
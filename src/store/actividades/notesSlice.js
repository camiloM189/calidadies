import { createSlice } from "@reduxjs/toolkit";


export const notesSlice = createSlice({
   name: 'notes',
   initialState:{
    note:[],
    titleNote:[],
    cont:0,
    sumCont:1,
    active:false,
    trueNote: [],
    file:[],
    message:'',
    metas:[]

   },
   reducers: {
    onNotes:(state,{payload}) => {
        state.note.push(payload);
    },
    onWindow:(state,{payload}) => {
        state.titleNote = payload;
    },
    onCont:(state,{payload}) => {
        state.cont = state.cont + state.sumCont
    },
    onEmpy:(state,{payload}) => {
        state.titleNote = [];
        state.cont = 0
    },
    onLoandingCont:(state,{payload}) => {
        state.cont = payload;
        state.file = [];
    },
    onActive:(state,{payload}) => {
        state.active = true;
        state.trueNote = payload;
    },
    onBack:(state,{payload}) => {
        state.active = false;
    },
    onDelete:(state,{payload}) => {
        state.cont = state.cont - state.sumCont;
    },
    onFile:(state,{payload}) => {
        state.file.push(payload);
    },
    onSetFile:(state,{payload}) => {
        state.file = payload;
    },
    onMetas:(state,{payload}) => {
        state.metas = payload
    },
   }
});
          

// Action creators are generated for each case reducer function
export const { onNotes,onWindow,onCont,onEmpy,
    onLoandingCont,onActive,onBack,onDelete,onFile,onSetFile,onMetas } = notesSlice.actions;
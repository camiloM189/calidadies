import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
    status: 'checking', // 'not-authenticated','authenticated','checking'
    uid: null,
    email:null,
    name:null,
    photoURL:null,
    errorMessage:undefined,
    aplication:false,
},
reducers: {
  login:(state,{payload}) => {
   state.status = 'authenticated';
   state.uid = payload.uid;
   state.email = payload.email;
   state.name = payload.name;
   state.photoURL = payload.photoURL;
   state.errorMessage = undefined;

  },
  logout:(state,{payload}) => {
   state.status = 'not-authenticated';
   state.uid = null;
   state.email = null;
   state.name = null;
   state.photoURL = null;
   state.errorMessage = payload;
  },
  checkingCredentials: (state) => {
       state.status = 'checking';
  },
  clearErrorMessage:(state) => {
    state.errorMessage = undefined;
  },
  onPage:(state) => {
    state.aplication = true;
  }
}
});
          

// Action creators are generated for each case reducer function
export const { login,logout,checkingCredentials,clearErrorMessage,onPage } = authSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

export const actividadesSlice = createSlice({
   name: 'actividades',
   initialState: {
    actividades:[{
        title:'',
        list:[]
    }],
    messageSaved:'',
    isSaving:false,
    active:[],
    close:false,
    model:false,
    plan:false,
    loanding:false,
    currentItem: {},
    guardar:[{
        list:[]
    }],
    activeListSelect:[],
    ItemSet:{},
    itemUpdate:[],

   },
   reducers: {

     onNewPlan: (state,{payload}) => {
        state.plan = true;
        state.active = [];
        state.activeListSelect = [];
        state.objeto = [];

    },
    closeNewPlan:(state,{payload}) => {
        state.plan = false;

    },
    onChangeFirtsList: (state,{payload}) => {
        state.actividades.forEach(actividad => {
            actividad.list[0] = payload;    
    });
    },
     onNewTitleList: (state,{payload}) => {   
        state.actividades.forEach(actividad => {
                actividad.list.push(payload);    
        });
    },
     onSavingNewPlan: (state,{payload}) => {
         state.actividades = (payload)
         state.plan = false;
         state.active = [];
         state.activeListSelect = [];
         state.guardar = [{
            list:[]
        }];
        state.loanding = false;
        state.close = true;
        state.objeto = [];

    },
    onActivePLan: (state,{payload}) => {
        state.active.push(payload)
    },
    onUpdateActivePLan: (state,{payload}) => {
        state.active.push(payload)
    },
    onSetListItems: (state,{payload}) => {
        state.currentItem = payload;
    },
    onSetGuardar: (state,{payload}) => {
        state.guardar.forEach(save => {
            save.list.push(payload);    
    });
        state.messageSaved = payload.fecha;
    },
    onSetGetItem:(state,{payload}) => {
        state.currentItem = payload;
        state.plan = true;
        state.objeto = [];

    },
    onSetLisItem:(state,{payload}) => {
        state.active.push(payload)
        state.messageSaved = payload._id
    },
    onUpdateActivite:(state,{payload}) => {
       state.actividades = state.actividades.map(activite => {
            if(activite._id === payload._id){
                 return payload
            }
            return activite;
       });
       state.messageSaved = `${payload._id}, actualizada correctamente`;
    },
    onLoanding:(state) => {
        state.loanding = true;
    },
    onActiveClear:(state) => {
        state.active = [];
        state.activeListSelect = [];
        state.objeto = [];
    },
    onClearActividades:(state,{payload}) => {
        state.actividades = state.actividades.filter(activitie => activitie._id !== payload);
    },
    onActiveSelect:(state,{payload}) => {
        state.activeListSelect.push(payload);
    },
    onCurrenItem:(state,{payload}) => {
        state.ItemSet = payload;
    },
    onItemUpdate:(state,{payload}) => {
        state.itemUpdate = payload
       
    },
    onItemUpdateEvent:(state,{payload}) => {
        state.itemUpdate.forEach(save => {
            save.listItem.metas.push(payload);    
    });
    },

   },
   

});
          

// Action creators are generated for each case reducer function
export const { onNewPlan,onSavingNewPlan,onNewTitleList,onActivePLan,onChangeFirtsList
    ,onSetListItems,onSetGuardar,onSetGetItem,closeNewPlan,onSetLisItem,
    onLoanding,onUpdateActivite,onUpdateActivePLan,
    onActiveClear,onClearActividades,onActiveSelect,onCurrenItem,
    onItemUpdate,onItemUpdateEvent
 } = actividadesSlice.actions;
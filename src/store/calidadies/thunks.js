import { addNewPlan, closeModal, closeNewPlan, createNewPlan, openList, openModal,} from "./calidadiesSlice"

export const startSaveNewPlan = ({addTitleList='',addTitle=''}) => {
    return async(dispatch) => {
        const newNote = {
            title:addTitle,
            list:[{listItem:{titleItem:addTitleList}}],
            id:new Date().getTime(),


        }
     
            if(addTitle.length > 0){

                dispatch(addNewPlan(newNote))

            }
          


        
    }
}
export const startListPlan = ({list,title}) => {
    return async(dispatch) => {
        dispatch(createNewPlan())

        dispatch(openList(list,title))
        console.log(title);


    }


}












export const startNewPlan = () => {
    return async(dispatch) => {
        dispatch(createNewPlan())
    }
}
export const startClosePlan = () => {
    return async(dispatch) => {
        dispatch(closeNewPlan())
    }
}
export const startOpenModal = () => {
    return async(dispatch) => {
        dispatch(openModal())
    }
}
export const startCloseModal = () => {
    return async(dispatch) => {
        dispatch(closeModal())
    }
}

import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    NotificationModal: false
}

export const NotificationReducer = createSlice({
    name: "NOTIFICATION",
    initialState,
    reducers: {
        getNotificationModal(state,{payload}) {
            state.NotificationModal = !payload
        }
    }
})

export const {getNotificationModal} = NotificationReducer.actions
export default NotificationReducer.reducer
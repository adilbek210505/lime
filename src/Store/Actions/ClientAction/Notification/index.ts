import {appDispatch} from "../../../index";
import {getNotificationModal} from "../../../Reducers/ClientSlice/Notification/NotificationSlice";


export const getNotificationREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(getNotificationModal(el))
}
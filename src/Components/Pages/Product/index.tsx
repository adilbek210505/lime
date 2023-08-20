import React from 'react';
import {Route, Routes} from "react-router-dom";
import TrackOrder from "../../../Ui/Checkout/Checkout";
import Success from "../../../Ui/Checkout/Succeded";
import ProfileNotification from "./Notification/ProfileNoti/ProfileNotification";
import NewPage from "./Notification/NewPage/NewPage";
import ProfileOrders from "./Notification/ ProfileOrders/ProfileOrders";
import ProfileCard from "./Notification/ProfileCard/ProfileCard";

const NotificationGlobal = () => {
    return (
        <div>


            {/*<Routes>*/}
            {/*    /!*<Route path={"/"} element={<ClientHeader/>}/>*!/*/}
            {/*    <Route path="/" element={<ProfileNotification/>}/>*/}
            {/*    <Route path="/new-page" element={<NewPage/>}/>*/}
            {/*    <Route path="/notification-orders" element={<ProfileOrders/>}/>*/}
            {/*    <Route path="/notification-cards" element={<ProfileCard/>}/>*/}

            {/*</Routes>*/}


            {/*<TrackOrder/>*/}
            {/*<Success/>*/}
        </div>
    );
};

export default NotificationGlobal;

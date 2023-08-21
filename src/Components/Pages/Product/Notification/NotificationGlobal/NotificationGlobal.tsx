import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProfileNotification from "../ProfileNoti/ProfileNotification";
import NewPage from "../NewPage/NewPage";
import ProfileOrders from "../ ProfileOrders/ProfileOrders";
import ProfileCard from "../ProfileCard/ProfileCard";
import TrackOrder from "../../../../../Ui/Checkout/Checkout";
import Success from "../../../../../Ui/Checkout/Succeded";
import Notification from "../Notification";



const NotificationGlobal = () => {
    return (
        <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"center" ,flexDirection:"column"}}>
            <Notification/>
            <Routes>
                {/*<Route path={"/"} element={<ClientHeader/>}/>*/}
                {/*<Route path="/" element={<ProfileNotification/>}/>*/}
                <Route path="/new-page" element={<NewPage/>}/>
                <Route path="/notification-orders" element={<ProfileOrders/>}/>
                <Route path="/notification-cards" element={<ProfileCard/>}/>
                <Route path="/change-profile" element={<ProfileNotification/>}/>


            </Routes>


            {/*<TrackOrder/>*/}
            {/*<Success/>*/}

        </div>
    );
};

export default NotificationGlobal;
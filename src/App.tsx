import React from 'react';
import {Route, Routes} from "react-router-dom";
import ClientHome from "./Home/ClientHome";
import AdminHome from "./Home/AdminHome";
import NotificationGlobal from "./Components/Pages/Product/Notification/NotificationGlobal/NotificationGlobal";
import ProfileCard from "./Components/Pages/Product/Notification/ProfileCard/ProfileCard";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<ClientHome/>}/>
                <Route path={"/admin"} element={<AdminHome/>}/>
            </Routes>
        </>
    )
};

export default App;
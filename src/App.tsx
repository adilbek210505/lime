import React from 'react';
import Admin from "./admin/Admin";

import {Route, Routes} from "react-router-dom";
import ClientHome from "./Home/ClientHome";
import NotificationGlobal from "./Components/Pages/Product/Notification/NotificationGlobal/NotificationGlobal";
import ProfileCard from "./Components/Pages/Product/Notification/ProfileCard/ProfileCard";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<ClientHome/>}/>
            </Routes>

             <Admin/>

            {/*клиентская часть */}
            {/*<NotificationGlobal/>*/}

        </>
    )
};

export default App;
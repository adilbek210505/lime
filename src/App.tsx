import React from 'react';
import {Route, Routes} from "react-router-dom";
import ClientHome from "./Home/ClientHome";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<ClientHome/>}/>
            </Routes>
        </>
    )
};

export default App;
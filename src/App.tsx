import React from 'react';
import {Route, Routes} from "react-router-dom";
import ClientHeader from "./Components/Header/ClientHeader/ClientHeader";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<ClientHeader/>}/>
            </Routes>
        </>
    )
};

export default App;
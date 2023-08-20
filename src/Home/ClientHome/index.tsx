import React from 'react';
import ClientHeader from "../../Components/Header/ClientHeader/ClientHeader";
import Product from "../../Components/Pages/Product";
import "./ClientHome.scss"

const ClientHome = () => {
    return (
        <div id="clientHome">
            <div className="container">
                <div className="clientHome">
                    <ClientHeader/>
                    <Product/>
                </div>
            </div>
        </div>
    );
};

export default ClientHome;
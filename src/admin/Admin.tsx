import React from 'react';
import AdminHeader from "./admin-header/adminHeader";
import {Route, Routes} from "react-router-dom";
import AdminProduct from "./admin-product/admin-product";
import "./admin.scss"
import ProductLIst from "./admin-product/ProductLIst/ProductLIst";
import AddProduct from "./admin-product/addProduct/AddProduct";
import Employees from "./admin-employess/Employess/Employess";
import AdminPayment from "./admin-payment/AdminPayment";
import Checkout from "../Ui/Checkout/Checkout";
import AdminDocumention from "./admin-documention/AdminDocumention";

const Admin = () => {
    return (
        <div className="admin">

            <div className="admin-both">
                <div className="admin-pages"> <AdminHeader/></div>

                <div className="product-global" style={{display:"flex",flexDirection:"column"}}>
                    <div className="search">
                        <span>   <input type="text"  placeholder="Search here"/> </span>
                    </div>

               <div className="admin-rout">
                   <Routes>
                       <Route path={"/product"} element={<AdminProduct/>}/>
                       <Route path={"/product-list"} element={<ProductLIst/>}/>
                       <Route path={"/add-product"} element={<AddProduct/>}/>
                       <Route path={"/add-list"} element={<ProductLIst/>}/>
                       <Route path={"/employees"} element={<Employees/>}/>
                       <Route path={"/payments"} element={ <AdminPayment/>}/>
                       <Route path={"/payment-checkout"} element={<Checkout/>}/>
                       <Route path={"/admin-documentation"} element={<AdminDocumention/>}/>
                   </Routes>
               </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
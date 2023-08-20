import React from 'react';
import "./ProductLIst.scss"
import { PiPencilSimpleLine } from 'react-icons/pi';
import { RiDeleteBin7Line } from 'react-icons/ri';
import {NavLink} from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';


const ProductLIst = () => {
    return (
        <div className="groceryList">
            <div className="list-hero">
                <div className="list-group">
                  <NavLink to={"/product"}> <span><BsArrowLeft/></span></NavLink>
                    <h1>Grocery list</h1>
                </div>
                <div className="list-btn">
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.4993 15.8333H2.49935C2.27834 15.8333 2.06637 15.921 1.91009 16.0773C1.75381 16.2336 1.66602 16.4456 1.66602 16.6666C1.66602 16.8876 1.75381 17.0996 1.91009 17.2558C2.06637 17.4121 2.27834 17.4999 2.49935 17.4999H17.4993C17.7204 17.4999 17.9323 17.4121 18.0886 17.2558C18.2449 17.0996 18.3327 16.8876 18.3327 16.6666C18.3327 16.4456 18.2449 16.2336 18.0886 16.0773C17.9323 15.921 17.7204 15.8333 17.4993 15.8333Z"
                                fill="#6CC51D"/>
                            <path
                                d="M9.9995 1.66675C9.77849 1.66675 9.56653 1.75455 9.41025 1.91083C9.25397 2.06711 9.16617 2.27907 9.16617 2.50008V11.3251L6.4245 8.57508C6.26758 8.41816 6.05475 8.33001 5.83284 8.33001C5.61092 8.33001 5.39809 8.41816 5.24117 8.57508C5.08425 8.732 4.99609 8.94483 4.99609 9.16675C4.99609 9.38867 5.08425 9.6015 5.24117 9.75842L9.40784 13.9251C9.48531 14.0032 9.57747 14.0652 9.67902 14.1075C9.78057 14.1498 9.88949 14.1716 9.9995 14.1716C10.1095 14.1716 10.2184 14.1498 10.32 14.1075C10.4215 14.0652 10.5137 14.0032 10.5912 13.9251L14.7578 9.75842C14.8355 9.68072 14.8972 9.58848 14.9392 9.48696C14.9813 9.38544 15.0029 9.27663 15.0029 9.16675C15.0029 9.05687 14.9813 8.94806 14.9392 8.84654C14.8972 8.74502 14.8355 8.65278 14.7578 8.57508C14.6801 8.49738 14.5879 8.43575 14.4864 8.3937C14.3849 8.35165 14.2761 8.33001 14.1662 8.33001C14.0563 8.33001 13.9475 8.35165 13.846 8.3937C13.7444 8.43575 13.6522 8.49738 13.5745 8.57508L10.8328 11.3251V2.50008C10.8328 2.27907 10.745 2.06711 10.5888 1.91083C10.4325 1.75455 10.2205 1.66675 9.9995 1.66675Z"
                                fill="#6CC51D"/>
                        </svg>
                        <h4>Save Report</h4>
                    </button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12V12" stroke="#181818" stroke-width="2"/>
                        <path d="M9 10L15 10" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 14H12" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 8L19 2M16 5H22" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
            </div>
            <div className="grid-container">
                <div className="grid-row ">
                    <div className="grid-cell"><h1>Name product</h1></div>
                    <div className="grid-cell"><h1>minim. weight</h1></div>
                    <div className="grid-cell"><h1>remainder</h1></div>
                    <div className="grid-cell"><h1>weight</h1></div>
                    <div className="grid-cell"><h1>price original</h1></div>
                    <div className="grid-cell"><h1>discount</h1></div>
                    <div className="grid-cell"><h1>selling price</h1></div>
                </div>
                {Array.from({length: 7}, (_, row) => (
                    <div key={row} className="grid-row">
                        <div className="grid-cell">
                            <h6>MAKFA Lagman 400 g</h6>
                        </div>
                        <div className="grid-cell"><span>0,250 kg</span></div>
                        <div className="grid-cell"><h6>150 pc</h6></div>
                        <div className="grid-cell"><h6>60 kg</h6></div>
                        <div className="grid-cell"><h6>55.00 c</h6></div>
                        <div className="grid-cell"><h6>15%</h6></div>
                        <div className="grid-cell" style={{display: "flex"}}><span><h6>60.00 c</h6> </span>
                          <NavLink to="/add-product">  <span> <PiPencilSimpleLine/></span></NavLink>
                           <div className="cell-span"><RiDeleteBin7Line/></div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductLIst;
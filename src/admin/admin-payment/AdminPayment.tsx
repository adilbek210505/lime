import React from 'react';
import {NavLink} from "react-router-dom";
import "./AdminPayment.scss"
import visa from "../img/Visa.png"
import master from "../img/master.png"
import nupay from "../img/nupay.png"
const AdminPayment = () => {
    return (
        <div className="payments">
            <div className="payments-first ">
                <h1>Payments overview</h1>
            </div>
            <div className="payments-second">
                <NavLink to={"/allPayments"}><h2>All payments</h2></NavLink>
                <NavLink to={"/succeeded"}><h2>Succeeded</h2></NavLink>
            </div>
            <div className="payments-third">
                <input type="date"/>
                <div className="payments-third_status">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.5242 2.57764C8.77666 2.57764 9.00753 2.7203 9.12046 2.94616L9.60286 3.91097H13.6029C13.9711 3.91097 14.2695 4.20945 14.2695 4.57764V11.911C14.2695 12.2792 13.9711 12.5776 13.6029 12.5776H9.3482C9.09573 12.5776 8.86486 12.435 8.75193 12.2091L8.26953 11.2443H3.60286V15.2443H2.26953V2.57764H8.5242ZM8.11213 3.91097H3.60286V9.91097H9.0936L9.76026 11.2443H12.9362V5.2443H8.7788L8.11213 3.91097Z"
                            fill="#181818"/>
                    </svg>
                    <select name="" id="">
                        <option value=""><h4>status</h4></option>
                    </select>

                </div>

            </div>
            <div className="payments-four">
                <hr/>
                <div className="payments-four-head ">
                    <h4>Payment ID</h4>
                    <h4> Status</h4>
                    <h4> Amount</h4>
                    <h4>p. method</h4>
                    <h4> Creation date</h4>

                </div>

                <hr/>
                <NavLink to="/payment-checkout">
                    <div className=" payments-four-body ">
                        <h3>06c1774-7f3d-46ad...90a8</h3>
                        <h2>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.13346 14.8042C4.45156 14.8042 1.4668 11.8194 1.4668 8.13749C1.4668 4.45559 4.45156 1.47083 8.13346 1.47083C11.8153 1.47083 14.8001 4.45559 14.8001 8.13749C14.8001 11.8194 11.8153 14.8042 8.13346 14.8042ZM7.46853 10.8042L12.1826 6.09011L11.2398 5.14731L7.46853 8.91856L5.58294 7.03289L4.64012 7.97576L7.46853 10.8042Z"
                                    fill="#165E3D"/>
                            </svg>
                            <span> Succeeded</span>
                        </h2>
                        <h3>$19,623.00 USD</h3>
                        <div className="cards">
                            <img src={master} alt=""/>
                            <h3>•••• 4242</h3></div>
                        <h3>Mar 23, 2022, 13:00 PM</h3>
                    </div>
                </NavLink>

                <hr/>
                <NavLink to="/payment-checkout">
                    <div className=" payments-four-body ">
                        <h3>06c1774-7f3d-46ad...90a8</h3>
                        <h3>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.38346 13.8847C3.70156 13.8847 0.716797 10.8999 0.716797 7.21806C0.716797 3.53616 3.70156 0.551392 7.38346 0.551392C11.0653 0.551392 14.0501 3.53616 14.0501 7.21806C14.0501 10.8999 11.0653 13.8847 7.38346 13.8847ZM8.05013 7.21806V3.88472H6.7168V8.55139H10.7168V7.21806H8.05013Z" fill="#B5850B"/>
                            </svg>
                            <span> Pending</span>
                        </h3>
                        <h3>$19,623.00 USD</h3>
                        <div className="cards">
                            <img src={master} alt=""/>
                            <h3>•••• 4242</h3></div>
                        <h3>Mar 23, 2022, 13:00 PM</h3>
                    </div>
                </NavLink>
                <hr/>
                <NavLink to="/payment-checkout">
                    <div className=" payments-four-body ">
                        <h3>06c1774-7f3d-46ad...90a8</h3>
                        <h2>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.13346 14.8042C4.45156 14.8042 1.4668 11.8194 1.4668 8.13749C1.4668 4.45559 4.45156 1.47083 8.13346 1.47083C11.8153 1.47083 14.8001 4.45559 14.8001 8.13749C14.8001 11.8194 11.8153 14.8042 8.13346 14.8042ZM7.46853 10.8042L12.1826 6.09011L11.2398 5.14731L7.46853 8.91856L5.58294 7.03289L4.64012 7.97576L7.46853 10.8042Z"
                                    fill="#165E3D"/>
                            </svg>
                            <span> Succeeded</span>
                        </h2>
                        <h3>$19,623.00 USD</h3>
                        <div className="cards">
                            <img src={master} alt=""/>
                            <h3>•••• 4242</h3></div>
                        <h3>Mar 23, 2022, 13:00 PM</h3>
                    </div>
                </NavLink>
                <hr/>
                <NavLink to="/payment-checkout">
                    <div className=" payments-four-body ">
                        <h3>06c1774-7f3d-46ad...90a8</h3>
                        <h2>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.13346 14.8042C4.45156 14.8042 1.4668 11.8194 1.4668 8.13749C1.4668 4.45559 4.45156 1.47083 8.13346 1.47083C11.8153 1.47083 14.8001 4.45559 14.8001 8.13749C14.8001 11.8194 11.8153 14.8042 8.13346 14.8042ZM7.46853 10.8042L12.1826 6.09011L11.2398 5.14731L7.46853 8.91856L5.58294 7.03289L4.64012 7.97576L7.46853 10.8042Z"
                                    fill="#165E3D"/>
                            </svg>
                            <span> Succeeded</span>
                        </h2>
                        <h3>$19,623.00 USD</h3>
                        <div className="cards">
                            <img src={master} alt=""/>
                            <h3>•••• 4242</h3></div>
                        <h3>Mar 23, 2022, 13:00 PM</h3>
                    </div>
                </NavLink>
                <hr/>
                <NavLink to="/payment-checkout">
                    <div className=" payments-four-body ">
                        <h3>06c1774-7f3d-46ad...90a8</h3>
                        <h3>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.38346 13.8847C3.70156 13.8847 0.716797 10.8999 0.716797 7.21806C0.716797 3.53616 3.70156 0.551392 7.38346 0.551392C11.0653 0.551392 14.0501 3.53616 14.0501 7.21806C14.0501 10.8999 11.0653 13.8847 7.38346 13.8847ZM8.05013 7.21806V3.88472H6.7168V8.55139H10.7168V7.21806H8.05013Z" fill="#B5850B"/>
                            </svg>

                            <span> Pending</span>
                        </h3>
                        <h3>$19,623.00 USD</h3>
                        <div className="cards">
                            <img src={master} alt=""/>
                            <h3>•••• 4242</h3></div>
                        <h3>Mar 23, 2022, 13:00 PM</h3>
                    </div>
                </NavLink>
                <hr/>
            </div>
        </div>
    );
};

export default AdminPayment;
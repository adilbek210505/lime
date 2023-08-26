import React from 'react';
import "./Employess.scss"

import {Link, NavLink} from "react-router-dom";
import user from "../../img/user.png";
import { BsFillStarFill } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";

interface Block {
    id: number;
    name: string;
    price: number;
}

const employeesData: Block[] = [
    { id: 1, name: "Courier Justin", price: 650 },
    { id: 2, name: "Courier Justin", price: 650 },
    { id: 3, name: "Courier Justin", price: 650 },
    { id: 4, name: "Courier Justin", price: 650 },
    { id: 5, name: "Courier Justin", price: 650 },
];

const Employees = () => {
    return (
        <div className="collections">
            <div className="free">
                <Link to={"/couriers"}> <h1>Couriers </h1></Link>
                <Link to={"/couriersCollectors"}>  <h1>Collectors</h1> </Link>
                <button>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 0.875V12.125" stroke="#6CC51D" stroke-linecap="round"/>
                        <path d="M0.875 6.5H12.125" stroke="#6CC51D" stroke-linecap="round"/>
                    </svg>
                    <h1>Add employee</h1>
                </button>
            </div>

           <div className="nazi">
               <div className="night">
                   {employeesData.map(employee => (
                       <div key={employee.id} className="collection">
                           <div className="block1">
                               <div className="justin">
                                   <img src={user} alt=""/>
                                   <h3>{employee.name}</h3>
                               </div>
                               <h4>650</h4>
                           </div>
                           <div className="block2">
                               <h1>4.5</h1>
                               <div className="icons">
                                   <BsFillStarFill/>
                                   <BsFillStarFill/>
                                   <BsFillStarFill/>
                                   <BsFillStarFill/>
                                   <FaStarHalfAlt/>
                               </div>

                           </div>
                           <div className="block3">
                               <div className="buttons">
                                  <button className="btn1">Free</button>
                               <NavLink to={"/on-delivery"}>   <button className="btn2">On Delivery</button> </NavLink>
                               </div>
                               <div className="block4">
                                   < FiPhoneCall className="icon1"/>
                                   <CgMail className="icon2"/>
                               </div>
                           </div>
                       </div>
                   ))}
               </div>

               <div className="night">
                   {employeesData.map(employee => (
                       <div key={employee.id} className="collection">
                           <div className="block1">
                               <div className="justin">
                                   <img src={user} alt=""/>
                                   <h3>{employee.name}</h3>
                               </div>
                               <h4>650</h4>
                           </div>
                           <div className="block2">
                               <h1>4.5</h1>
                               <div className="icons">
                                   <BsFillStarFill/>
                                   <BsFillStarFill/>
                                   <BsFillStarFill/>
                                   <BsFillStarFill/>
                                   <FaStarHalfAlt/>
                               </div>

                           </div>
                           <div className="block3">
                               <div className="buttons">
                                   <button className="btn1">Free</button>
                                   <NavLink to={"/on-delivery"}>   <button className="btn2">On Delivery</button> </NavLink>
                               </div>
                               <div className="block4">
                                   < FiPhoneCall className="icon1"/>
                                   <CgMail className="icon2"/>
                               </div>
                           </div>
                       </div>
                   ))}
               </div>

               <div className="night" >
                   <div className="collection">
                       <div className="block1">
                           <div className="justin">
                               <img src={user} alt=""/>
                               <h3>Courier Justin</h3>
                           </div>
                           <h4>650</h4>
                       </div>
                       <div className="block2">
                           <h1>4.5</h1>
                           <div className="icons">
                               <BsFillStarFill/>
                               <BsFillStarFill/>
                               <BsFillStarFill/>
                               <BsFillStarFill/>
                               <FaStarHalfAlt/>
                           </div>

                       </div>
                       <div className="block3">
                           <div className="buttons">
                               <button className="btn1">Free</button>
                               <NavLink to={"/on-delivery"}>   <button className="btn2">On Delivery</button> </NavLink>
                           </div>
                           <div className="block4">
                               < FiPhoneCall className="icon1"/>
                               <CgMail className="icon2"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Employees;

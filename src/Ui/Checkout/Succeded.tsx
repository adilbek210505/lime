import React from 'react';
import "./Succeded.scss"
import success from "../../assets/img/succed.png"
import {GrClose} from 'react-icons/gr';

const Success = () => {
    return (
        <div className="success">
            <div className="iconic">
                <GrClose/>
            </div>
            <div className="success-global ">
                <img src={success} alt=""/>
                <h2> Thank You For Your Purchase</h2>
                <h3>Order #123RGR231567Y Confirmed</h3>
                <button><span>Track Order</span></button>
            </div>

        </div>
    );
};

export default Success;
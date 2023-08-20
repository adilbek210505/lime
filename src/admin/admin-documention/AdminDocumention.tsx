import React from "react";
import "./AdminDocumention.scss"
import icon from "../img/documention.png"


const AdminDocumentation = () => {
    return (
        <div className="total">
            <div className="total--block">
                <div>
                    <h1>Total Revenues</h1>
                    <div className="line"></div>
                </div>
                <h2>Income</h2>
                <h2>Expenses</h2>
            </div>
            <div className="total--day">
                <h4>for one day</h4>
                <h4>in one week</h4>
                <h4>in one month</h4>
                <input type="date" />
            </div>
            <div className="total--blue">
                <div className="total--blue__one">
                    <div className="total--blue__one--img">
                        <img src={icon} alt="" />
                        <div>
                            <h1>357</h1>
                            <p>Total Delivered</p>
                        </div>
                    </div>
                </div>
                <div className="total--blue__one">
                    <div className="total--blue__one--img">
                        <img src={icon} alt="" />
                        <div>
                            <h1>357</h1>
                            <p>Total Delivered</p>
                        </div>
                    </div>
                </div>
                <div className="total--blue__one">
                    <div className="total--blue__one--img">
                        <img src={icon} alt="" />
                        <div>
                            <h1>357</h1>
                            <p>Total Delivered</p>
                        </div>
                    </div>
                </div>
                <div className="total--blue__one">
                    <div className="total--blue__one--img">
                        <img src={icon} alt="" />
                        <div>
                            <h1>357</h1>
                            <p>Total Delivered</p>
                        </div>
                    </div>
                </div>
                <div className="total--blue__one">
                    <div className="total--blue__one--img">
                        <img src={icon} alt="" />
                        <div>
                            <h1>357</h1>
                            <p>Total Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDocumentation;
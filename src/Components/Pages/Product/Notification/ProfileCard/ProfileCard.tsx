import React from 'react';
import "./ProfileCard.scss"
import prof from "../../../../../admin/img/kyz.png"
import karta from "../../../../../admin/img/card.png"
import visa6 from "../../../../../admin/img/visa6.png"
import visa1 from "../../../../../admin/img/visa2.png"
import visa2 from "../../../../../admin/img/visa5.png"
import visa3 from "../../../../../admin/img/visa4.png"

const ProfileCard = () => {
    return (
        <div className="noticard">
            <div className="noticard--btn">
                <button><span>+Add credit <br/>card</span></button>
            </div>
            <div className="noticard--card">
                <img src={karta} alt=""/>
                <div className="images">
                    <img src={visa6} alt=""/>
                    <img src={visa1} alt=""/>
                    <img src={visa2} alt=""/>
                    <img src={visa3} alt=""/>
                </div>
            </div>
            <div className="cards">
                <div className='card-first'>
                    <h3>Card Number</h3>
                    <input type="number" placeholder="1234  5678  9101  1121"/>
                </div>
                <div className="card-second">
                              <span>
                                  <h3>Expiration Date</h3>
                              <input type="number" placeholder="MM/YY"/>
                              </span>
                    <span>
                                   <h3>CVV</h3>
                              <input type="number" placeholder="123"/>
                              </span>

                </div>
                <div className="card-three">
                    <div className=" save-checkbox">
                        <input type="checkbox"/>
                        <h5>Save card details</h5>
                    </div>
                    <p>Your personal data will be used to process your order, support your <br/>experience throughout
                        this website, and for other purposes <br/>described in our privacy policy.</p>
                </div>
            </div>

        </div>
    );
};

export default ProfileCard;






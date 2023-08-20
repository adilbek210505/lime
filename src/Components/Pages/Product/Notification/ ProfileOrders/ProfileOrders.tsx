// import React, { useState } from 'react';
// import box from "../../../../../assets/img/box.png";
// import { AiFillCaretDown } from 'react-icons/ai';
// import "./ProfileOrder.scss";
//
// const ProfileOrders = () => {
//     const [selected, setSelected] = useState<number | null>(null);
//
//     const toggle = (i: number) => {
//         if (selected === i) {
//             return setSelected(null);
//         }
//         setSelected(i);
//     };
//
//     return (
//         <div className="orders">
//             <div className="orders-global">
//                 <div className="order-insaid" onClick={() => toggle(0)}>
//                     <img src={box} alt=""/>
//                     <div className="orders-text">
//                         <h1>Order #90897 </h1>
//                         <h2> Placed on June 6 2023</h2>
//                         <h3> Product: 4 Total: 450c</h3>
//                     </div>
//                     <button> Pending</button>
//                     <span>{selected === 0 ? " - " : " + "}</span>
//                 </div>
//                 <div className={selected === 0 ? "show" : "close"}>
//                     <h5>+</h5>
//                     <h4> accordion content</h4>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ProfileOrders;


import React, { useState } from 'react';
import box from "../../../../../assets/img/box.png";
import { AiFillCaretDown } from 'react-icons/ai';
import "./ProfileOrder.scss";

const ProfileOrders = () => {
    const [selected, setSelected] = useState<number | null>(null);

    const toggle = (i: number) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    };

    return (
        <div className="orders">
            <div className="orders-global">
                <div className="order-insaid" onClick={() => toggle(0)}>
                    <img src={box} alt=""/>
                    <div className="orders-text">
                        <h1>Order #90897 </h1>
                        <h2> Placed on June 6 2023</h2>
                        <h3> Product: 4 Total: 450c</h3>
                    </div>
                    <button> Pending</button>
                    <span>{selected === 0 ? <AiFillCaretDown/>  : <AiFillCaretDown/>}</span>

                    <div className={selected === 0 ? "show" : "close"}>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileOrders;

import React from 'react';
import "./Checkout.scss"
import {useState} from "react";
import mbank from "../../assets/img/mbank.png"
import galary from "../../assets/img/galary.png"

const TrackOrder = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [apartment, setApartment] = useState('')


    const [lastNumber, setLastNumber] = useState('+996');
    const [lastStreet, setLastStreet] = useState('');
    const [lastHouse, setLastHouse] = useState('');
    const [lastApartment, setLastApartment] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [lastNumberError, setLastNumberError] = useState(false);
    const [lastHouseError, setLastHouseError] = useState(false);
    const [lastApartmentError, setLastApartmentError] = useState(false);

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const [image, setImage] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>('No selected file');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            setFileName(files[0].name);
            setImage(URL.createObjectURL(files[0]));
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCalendarVisible(event.target.value === 'selectDate');
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(new Date(event.target.value));
    };

    const formatDate = (date: Date | null): string => {
        if (date) {
            const formattedDate = new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }).format(date);
            return formattedDate.replace(',', '');
        }
        return '';
    };

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFirstName(value);
        setFirstNameError(value === '');
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLastName(value);
        setLastNameError(value === '' || firstName === '');
    };

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value.startsWith('+996') && /^\+996\d{0,9}$/.test(value)) {
            setLastNumber(value);
            setLastNumberError(false);
        } else {
            setLastNumberError(true);
        }
    };

    const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLastStreet(value);
    };

    const handleHouseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLastHouse(value);
        setLastHouseError(value === '' || firstName === '' || lastName === '' || lastNumber === '');
    };

    const handleApartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setLastApartment(value);
        setLastApartmentError(
            value === '' || firstName === '' || lastName === '' || lastNumber === '' || lastHouse === ''
        );
    };
    return (
        <div className="track">
            <div className="order">
                <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.481141 8.83458L0.482618 8.83305L9.03897 0.468413C9.67998 -0.158211 10.7168 -0.155879 11.3548 0.473882C11.9928 1.10356 11.9903 2.12204 11.3493 2.74874L5.60461 8.36463L27.0363 8.36463C27.9407 8.36463 28.6738 9.08479 28.6738 9.97322C28.6738 10.8616 27.9407 11.5818 27.0363 11.5818L5.60469 11.5818L11.3493 17.1977C11.9903 17.8244 11.9927 18.8429 11.3547 19.4725C10.7167 20.1024 9.67981 20.1046 9.03889 19.478L0.482535 11.1134L0.481061 11.1119C-0.160272 10.4831 -0.158227 9.46128 0.481141 8.83458Z"
                        fill="black"/>
                    <path
                        d="M0.481141 8.83458L0.482618 8.83305L9.03897 0.468413C9.67998 -0.158211 10.7168 -0.155879 11.3548 0.473882C11.9928 1.10356 11.9903 2.12204 11.3493 2.74874L5.60461 8.36463L27.0363 8.36463C27.9407 8.36463 28.6738 9.08479 28.6738 9.97322C28.6738 10.8616 27.9407 11.5818 27.0363 11.5818L5.60469 11.5818L11.3493 17.1977C11.9903 17.8244 11.9927 18.8429 11.3547 19.4725C10.7167 20.1024 9.67981 20.1046 9.03889 19.478L0.482535 11.1134L0.481061 11.1119C-0.160272 10.4831 -0.158227 9.46128 0.481141 8.83458Z"
                        fill="black"/>
                </svg>
                <h1>Checkout</h1>
            </div>
            <div className="validation">
                <div className=" validation-both ">
                    <div className={`validation-first `}>
                        <label htmlFor=" name"> <strong> Name:</strong></label>
                        <input
                            type="text" name="name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            style={{borderColor: firstNameError ? 'red' : undefined}}

                        />
                    </div>
                    <div className="validation-second">
                        <label htmlFor=" name"> <strong> Last name:</strong></label>
                        <input type="text"
                               name="Last name"
                               value={lastName}
                               onChange={handleLastNameChange}
                               style={{borderColor: lastNameError ? 'red' : undefined}}
                               disabled={!firstName}
                        />
                    </div>
                </div>
                <div className="validation-third">
                    <label htmlFor=" name"> <strong> Phone number:</strong></label>
                    <input
                        type="text"
                        value={lastNumber}
                        onChange={handleNumberChange}
                        style={{ borderColor: lastNumberError ? 'red' : undefined }}
                        disabled={firstNameError || lastNameError}
                    />

                </div>
                <div className="validation-four">
                    <label htmlFor="address"> <strong> Address:</strong></label>
                    <div className="validation-four-inputs ">
                        <input
                            type="text"
                            placeholder="street"
                            value={lastStreet}
                            onChange={handleStreetChange}
                            disabled={firstNameError || lastNameError || lastNumberError}
                        />
                        <input type="text" placeholder="house " className="inputs-three"
                               value={lastHouse}
                               onChange={handleHouseChange}
                               style={{borderColor: lastHouseError ? 'red' : undefined}}
                               disabled={firstNameError || lastNameError || lastNumberError || lastStreet === ''}
                        />
                        <input type="text" placeholder="apartment"
                               value={lastApartment}
                               onChange={handleApartmentChange}
                               style={{borderColor: lastApartmentError ? 'red' : undefined}}
                               disabled={firstNameError || lastNameError || lastNumberError || lastStreet === '' || lastHouseError}
                        />
                    </div>
                </div>
                    <div className="validation-five">
                        <label>
                            <strong>Delivery</strong>
                        </label>
                        <div className="validation-five_five">
                          <div className="check-both">
                              <input type="radio" name="deliveryOption" value="asap" onChange={handleCheckboxChange} />
                              <h4>Deliver the order as soon as possible</h4>
                          </div>
                        </div>
                        <div className="validation-five_five">
                            <div className="check-both">
                                <input type="radio" name="deliveryOption" value="selectDate" onChange={handleCheckboxChange} />
                                <h4>Select date and time of delivery</h4>
                            </div>
                            {isCalendarVisible && (
                                <div className="datetime-input-container">
                                    <input
                                        type="datetime-local"
                                        className="custom-datetime-input"
                                        onChange={handleDateChange}
                                    />
                                    {selectedDate && (
                                        <p className="formatted-date">{formatDate(selectedDate)}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                <div className=" validation-third">
                    <label htmlFor=" name"> <strong> leave a comment</strong></label>
                    <input type="text"
                           name="phone number" className=" form-control"/>
                </div>


                <div className="validation-five">
                    <div className="validation-five_five">
                        <div className={`check-both ${selectedOption === 'cash' ? 'selected' : ''}`} onClick={() => setSelectedOption('cash')}>
                            <input type="radio" checked={selectedOption === 'cash'} />
                            <h4>Cash payment to the courier</h4>
                        </div>
                        {selectedOption === 'cash' && (
                            <div className="additional-info">
                                <input type="text" placeholder="Сhange:"/>
                                <input type="text"/>
                            </div>
                        )}
                    </div>
                    <div className="validation-five_five">
                        <div className={`check-both ${selectedOption === 'card' ? 'selected' : ''}`} onClick={() => setSelectedOption('card')}>
                            <input type="radio" checked={selectedOption === 'card'} />
                            <h4>Card payment</h4>
                        </div>
                        {selectedOption === 'card' && (
                            <div className="payment-mbank">
                                <div className="validation-mbank">
                                    <div className="mbank-blu">
                                        <div className="mbank-global">
                                            <h2>Payment with Mbank</h2>
                                            <div className="payment">
                                                <h2>You can transfer payment upon receipt of the goods</h2>
                                                <div className="mbank-both">
                                                    <img src={mbank} alt="img"/>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.13889" stroke="#6CC51D" stroke-width="1.72222"/>
                                                        <path d="M10.0011 15.5557L5.18983 8.05566H14.8123L10.0011 15.5557Z" fill="#6CC51D"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <input type="number"/>
                                            <h4>Syrgakova Nurjamal</h4>
                                        </div>

                                    </div>
                                </div>
                                <div className="photo">

                                    <form onClick={() => {
                                        const inputField = document.querySelector('.input-field') as HTMLInputElement;
                                        inputField?.click();
                                    }}>
                                        <input type="file" accept="image/*"
                                               className="input-field"
                                               hidden
                                               onChange={handleImageChange}
                                        />
                                        {image ? (
                                            <img src={image} width="369px" height="470px" alt={fileName} />
                                        ) : (
                                            <div className="addFile">
                                                <div className="validation-add-check">
                                                    <img src={galary} alt=""/>
                                                    <h4> You can attach a check</h4>
                                                    <div className="check-svg">
                                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 1.00928V9.86563" stroke="white" stroke-width="1.44681" stroke-linecap="round" stroke-linejoin="round"/>
                                                            <path d="M1.57031 5.4375H10.432" stroke="white" stroke-width="1.44681" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div className="validation-block">
                    <div className="block">
                        <div className="block-first">
                            <h1>Fresh Broccoli</h1>
                            <h1>Avacod</h1>
                            <h1>Black Grapes</h1>
                            <h1>Pineapple</h1>
                            <h2>Subtotal</h2>
                            <h2> Shipping charges</h2>
                            <h3>Total 480с</h3>
                        </div>
                        <div className="block-second">
                            <h2>1.50 kg</h2>
                            <h2>1.50 kg</h2>
                            <h2>1.50 kg</h2>
                            <h2>1.50 kg</h2>
                        </div>
                        <div className="block-three">
                            <h6>145c</h6>
                            <h6>145c</h6>
                            <h6>145c</h6>
                            <h6>145c</h6>
                            <h2> 430с</h2>
                            <h2> 50с</h2>
                            <h3> 480с</h3>
                        </div>
                    </div>

                </div>
                <div className="order-btn">
                    <button><span> Order Now</span></button>
                </div>
            </div>
        </div>
    );
};

export default TrackOrder;



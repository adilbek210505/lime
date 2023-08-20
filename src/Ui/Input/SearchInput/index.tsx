import React from 'react';
import {ImSearch} from "react-icons/im";
import "./SearchInput.scss"
import Button from "../../Button";

const SearchInput = () => {
    return (
        <div id="searchIn">
            <div className="searchIn">
                <ImSearch className="searchIn--icon"/>
                <input type="text" placeholder="What would you like to buy..."/>
            </div>
            <div hidden={true}>
                <Button classes={"searchIn--btn"} text={"Log in"}/>
            </div>
        </div>
    );
};

export default SearchInput;
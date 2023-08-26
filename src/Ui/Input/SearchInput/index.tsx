import React from 'react';
import {ImSearch} from "react-icons/im";
import "./SearchInput.scss"
import Button from "../../Button";
import {useAppDispatch} from "../../../Hooks/Dispatch";
import {getCategoryREC} from "../../../Store/Actions/ClientAction/Product";
import {useAppSelector} from "../../../Hooks/Selector";

const SearchInput = () => {
    const {productListModal, productList, productListCategory} = useAppSelector(s => s.ProductReducer)
    const dispatch = useAppDispatch()
    const handleChange = (e: React.ChangeEvent<EventTarget | Element | any>) => dispatch(getCategoryREC(e.target.value))

    console.log(productList)
    return (
        <div id="searchIn">
            <div className="searchIn">
                <ImSearch className="searchIn--icon"/>
                <input type="text" placeholder="What would you like to buy..."/>
            </div>
            <div hidden={true}>
                <Button classes={"searchIn--btn"} text={"Log in"}/>
            </div>
            <div style={{display: productListModal ? "" : "block"}}>
                <select onChange={handleChange}>
                    {
                        productList.text === "juices" ?
                            <>
                                <option value="carbonated">Carbonated</option>
                                <option value="still">water</option>
                                <option value="water">still</option>
                            </>
                            :
                            productList.text === "vegetables" ?
                                <>
                                    <option value="carbonated">ad</option>
                                    <option value="still">adasasd</option>
                                    <option value="water">stasdasdasdill</option>
                                </>
                                : ''
                    }
                </select>
            </div>
        </div>
    );
};

export default SearchInput;
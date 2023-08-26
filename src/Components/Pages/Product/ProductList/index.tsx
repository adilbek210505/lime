import React from 'react';
import "./ProductList.scss"
import {useAppSelector} from "../../../../Hooks/Selector";
import ProductCard from "../ProductCard";
const ProductList = () => {
    const {product,productListModalCategory,productList,productListCategory} = useAppSelector(s => s.ProductReducer)


    return (
        <div style={{display: productListModalCategory ? "" : "none"}}>
            <div className="productList">
                <div className="productList--group">
                    {
                        product.map(el => (
                            <>
                                {
                                    el.category  === productList.text && el.categoryJuices !== productListCategory  && <ProductCard el={el}/>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductList;
import React from 'react';
import "./Favorite.scss"
import {useAppSelector} from "../../../../Hooks/Selector";
import ProductCard from "../ProductCard";

const Favorite = () => {
    const {favorite,favoriteMode} = useAppSelector(s => s.FavoriteReducer)


    return (
        <div hidden={favoriteMode}>
            <div className="favorite">
                <div className="favorite--group">
                    {
                        favorite.map(el => <ProductCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorite;
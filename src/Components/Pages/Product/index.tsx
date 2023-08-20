
import React, {useEffect} from 'react';
import SearchInput from "../../../Ui/Input/SearchInput";
import "./Product.scss"
import pr from "../../../assets/img/pineapple-pieces.png"
import cola from "../../../assets/img/cola.svg"
import pepsi from "../../../assets/img/pepsi.png"
import orange from "../../../assets/img/orange.png"
import asu from "../../../assets/img/asu.png"
import apply from "../../../assets/img/apple.png"
import milk from "../../../assets/img/milk.png"
import {useAppSelector} from "../../../Hooks/Selector";
import {useAppDispatch} from "../../../Hooks/Dispatch";
import {getProductREC} from "../../../Store/Actions/ClientAction/Product";
import ProductCard from "./ProductCard";
import Basket from "./Basket";
import DetailProduct from "./DetailProduct";
import Favorite from "./Favorites";

const Product = () => {
    const {product} = useAppSelector(s => s.ProductReducer)
    const dispatch = useAppDispatch()
    const data = [
        {
            id: 1,
            title: "Avocado",
            price: 120,
            kg: 2.50,
            img: pr,
            quantity: 1,
            description: "Описание для авокадо",
            category: "fruits"
        },
        {
            id: 2,
            title: "Banana",
            price: 40,
            kg: 1.00,
            img: pr,
            quantity: 1,
            description: "Описание для банана",
            category: "fruits"
        },
        {
            id: 3,
            title: "Apple",
            price: 80,
            kg: 1.20,
            img: pr,
            quantity: 1,
            description: "Описание для яблока",
            category: "fruits"
        },
        {
            id: 4,
            title: "Carrot",
            price: 25,
            kg: 0.30,
            img: pr,
            quantity: 1,
            description: "Описание для моркови",
            category: "vegetables"
        },
        {
            id: 5,
            title: "Orange",
            price: 60,
            kg: 1.50,
            img: pr,
            quantity: 1,
            description: "Описание для апельсина",
            category: "fruits"
        },
        {
            id: 6,
            title: "Broccoli",
            price: 35,
            kg: 0.50,
            img: pr,
            quantity: 1,
            description: "Описание для брокколи",
            category: "vegetables"
        },
        {
            id: 7,
            title: "Pineapple",
            price: 200,
            kg: 2.00,
            img: pr,
            quantity: 1,
            description: "Описание для ананаса",
            category: "fruits"
        },
        {
            id: 8,
            title: "Tomato",
            price: 30,
            kg: 0.25,
            img: pr,
            quantity: 1,
            description: "Описание для помидора",
            category: "vegetables"
        },
        {
            id: 9,
            title: "Pear",
            price: 70,
            kg: 1.00,
            img: pr,
            quantity: 1,
            description: "Описание для груши",
            category: "fruits"
        },
        {
            id: 10,
            title: "coffee",
            price: 90,
            liter: 0.3,
            img: pr,
            quantity: 1,
            description: "Description Coffee",
            category: "beverages",
        },
        {
            id: 11,
            title: "coca cola",
            price: 150,
            liter: 1,
            img: cola,
            quantity: 1,
            description: "Description Coca Cola",
            category: "beverages",
        },
        {
            id: 12,
            title: "pepsi",
            price: 130,
            liter: 1.5,
            img: pepsi,
            quantity: 1,
            description: "Description Pepsi",
            category: "beverages",
        },
        {
            id: 13,
            title: "apple",
            price: 80,
            liter: 1,
            img: apply,
            quantity: 1,
            description: "Description Apple Juice",
            category: "juices",
        },
        {
            id: 14,
            title: "orange",
            price: 90,
            liter: 1.5,
            img: orange,
            quantity: 1,
            description: "Description Orange Juice",
            category: "juices",
        },
        {
            id: 15,
            title: "water",
            price: 50,
            liter: 0.5,
            img: asu,
            quantity: 1,
            description: "Description Water",
            category: "beverages",
        },
        {
            id: 16,
            title: "pineapple",
            price: 100,
            liter: 1,
            img: pr,
            quantity: 1,
            description: "Description Pineapple Juice",
            category: "juices",
        },
        {
            id: 17,
            title: "sparkling water",
            price: 60,
            liter: 0.5,
            img: asu,
            quantity: 1,
            description: "Description Sparkling Water",
            category: "beverages",
        },
        {
            id: 18,
            title: "milk",
            price: 70,
            liter: 1,
            img: milk,
            quantity: 1,
            description: "Description Milk",
            category: "dairyProducts",
        },
    ]
    useEffect(() => {
        dispatch(getProductREC(data))
    }, [])

    return (
        <div className="product">
            <SearchInput/>
            <Basket/>
            <DetailProduct/>
            <Favorite/>
            <div className="product--group">
                {
                    product.map(el => <ProductCard el={el}/>)
                }
            </div>
        </div>
    );
};

export default Product;


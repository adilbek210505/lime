import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from "react-router-dom";
import {setUpStore} from "./Store";
import {Provider} from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const store = setUpStore()

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)
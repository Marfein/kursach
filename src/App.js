import React from "react";
import {Route, Routes} from "react-router";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'

import './components/SCSS/app.scss';

import {setDishes} from './redux/action/dishes'
import {Navbar, Header} from './components';
import {Cart, Home, Stocks} from "./pages";


function App(){
const dispatch = useDispatch();
const {items}=useSelector(({dishes,filters})=>{
    return{
        items:dishes.items,
        sortBy:filters.sortBy,
    }
})

React.useEffect(()=>{
    axios.get('http://localhost:3001/dishes').then(({data}) => {
    dispatch(setDishes(data));
});
},[]);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="app-wrapper-content"><Navbar/></div>
                <Routes>
                    <Route path="/stocks" element={<Stocks/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/" element={<Home items={items}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



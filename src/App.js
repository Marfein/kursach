import React from "react";
import {Route, Routes} from "react-router";
import axios from "axios";

import './components/SCSS/app.scss';

import {Navbar, Header} from './components';
import {Cart, Home, Stocks} from "./pages";

const App = () => {

    const[dishes,setDishes]= React.useState([])

    React.useEffect(()=> {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setDishes(data.dishes);
        });
    },[]);


    return (
            <div className="wrapper">
                 <Header/>
                <div className="content">
                    <div className="app-wrapper-content"><Navbar/></div>
                    <Routes>
                        <Route path="/stocks" element={<Stocks />}/>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/" element={<Home items={dishes} />}/>
                    </Routes>

                </div>
            </div>
    );
}

export default App;

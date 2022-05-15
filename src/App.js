import React from "react";
import {Route, Routes} from "react-router";

import './components/SCSS/app.scss';

import {Navbar, Header} from './components';
import {Cart, Home, Stocks} from "./pages";

const App = () => {
    return (
            <div className="wrapper">
                 <Header/>
                <div className="content">
                    <div className="app-wrapper-content"><Navbar/></div>
                    <Routes>
                        <Route path="/stocks" element={<Stocks />}/>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/" element={<Home />} />
                    </Routes>

                </div>
            </div>
    );
}

export default App;

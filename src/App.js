import React from "react";
import {Route, Routes} from "react-router";
import axios from "axios";
import {connect} from 'react-redux'

import './components/SCSS/app.scss';

import {setDishes as setDishesAction} from './redux/action/dishes'
import {Navbar, Header} from './components';
import {Cart, Home, Stocks} from "./pages";


class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setDishes(data.dishes);
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="app-wrapper-content"><Navbar/></div>
                    <Routes>
                        <Route path="/stocks" element={<Stocks/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/" element={<Home items={this.props.items}/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.dishes.items,
        filters:state.filters,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        setDishes:(items)=>dispatch(setDishesAction(items))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

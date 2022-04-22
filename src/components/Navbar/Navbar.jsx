import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav >
            <label htmlFor="menu_control" className={s.tabs}>
            <i className={s.tabs_icon}/>
            <i className={s.tabs_icon}/>
            <i className={s.tabs_icon}/>
            </label>
            <input type="checkbox" id="menu_control" className={s.menu_control}/>
           <div className={s.nav}> <div className={s.items}>
                <div className={s.item}><NavLink to="/stocks" className = { navData => navData.isActive ? s.active : s.ir }>Акции</NavLink></div>
                <div className={s.item}> <NavLink to="/stocks" className = { navData => navData.isActive ? s.active : s.ir }>Новинки</NavLink></div>
                <div className={s.item}> <NavLink to="/hot" className = { navData => navData.isActive ? s.active : s.ir }>Горячие напитки</NavLink></div>
                <div className={s.item}> <NavLink to="/stocks" className = { navData => navData.isActive ? s.active : s.ir }>Холодные напитки</NavLink></div>
            </div>
            <label htmlFor="menu_control" className={s.nav_close}/>
           </div>
        </nav>

    );
}

export default Navbar;
import React from 'react';
import {NavLink} from "react-router-dom";

import s from './Navbar.module.scss';




const Navbar = () => {
    return (
        <nav >
            <label htmlFor="menu_control" className={s.tabs}>
            <i className={s.tabs__icon}/>
            <i className={s.tabs__icon}/>
            <i className={s.tabs__icon}/>
            </label>
            <input type="checkbox" id="menu_control" className={s.menu_control}/>
           <div className={s.nav}> <div className={s.items}>
                <div className={s.item}><NavLink to="/stocks" className = { navData => navData.isActive ? s.active : s.ir }>Акции</NavLink></div>
                <div className={s.item}> <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.ir }>Новинки</NavLink></div>
                <div className={s.item}> <NavLink to="/hot" className = { navData => navData.isActive ? s.active : s.ir }>Горячие напитки</NavLink></div>
                <div className={s.item}> <NavLink to="/cold" className = { navData => navData.isActive ? s.active : s.ir }>Холодные напитки</NavLink></div>
            </div>
            <label htmlFor="menu_control" className={s.nav__close}/>
           </div>
        </nav>

    );
}

export default Navbar;
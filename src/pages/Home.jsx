import React from "react";
import {useDispatch} from "react-redux";

import {Categories, SortPopup, Dish} from "../components";
import {setCategory} from "../redux/action/filters";

const categoryNames = ['Баскеты',
    'Бургеры',
    'Твистеры',
    'Картофель',
    'Соусы'];
const sortItems=[{name:'Популярность', type:'popular'},
    {name:'цена', type:'price'},
    {name:'Алфавит', type:'alphabet'},];

function Home ({items}){
    const dispatch=useDispatch();

    const onSelectCategory=React.useCallback((index)=>{
        dispatch(setCategory(index));
    },[]);

    return(
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClickItem={onSelectCategory}
                        items={categoryNames} />
                    <SortPopup
                        items={sortItems} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items && items.map((obj) =>(
                    <Dish key={obj.id} {...obj}/>
                    ))}
                </div>
            </div>
    )
}

export  default Home;
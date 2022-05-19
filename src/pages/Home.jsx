import React from "react";

import {Categories, SortPopup, Dish} from "../components";


function Home ({items}){
    return(
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClickItem={(name)=>console.log(name)}
                        items={[
                            'Баскеты',
                            'Бургеры',
                            'Твистеры',
                            'Картофель',
                            'Соусы'
                        ]} />
                    <SortPopup
                        items={[
                            "Популярность",
                            "цена",
                            "Алфавит",
                        ]} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items.map((obj) =>(
                    <Dish key={obj.id} {...obj}/>
                    ))}
                </div>
            </div>
    )
}

export  default Home;
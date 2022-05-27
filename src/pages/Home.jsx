import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, Dish} from "../components";
import {setCategory, setSortBy} from "../redux/action/filters";
import {fetchDishes} from "../redux/action/dishes";

const categoryNames = ['Баскеты',
    'Бургеры',
    'Твистеры',
    'Картофель',
    'Соусы'];
const sortItems=[{name:'Популярность', type:'popular',order:'asc'},
    {name:'цена', type:'price',order:'asc'},
    {name:'Алфавит', type:'name',order:'asc'},];


function Home (){
    const dispatch=useDispatch();
    const items= useSelector(({dishes})=>dishes.items);
    const cartItems= useSelector(({cart})=>cart.items);
    const isLoaded= useSelector(({dishes})=>dishes.isLoaded);//потом буду использовать для фейковой загрузки с помощью скелетон
    const {category,sortBy} =useSelector(({filters})=>filters)

    React.useEffect(()=>{
        dispatch(fetchDishes(sortBy,category));
    },[sortBy,category]);

    const onSelectCategory=React.useCallback((index)=>{
        dispatch(setCategory(index));
    },[dispatch]);

    const onSelectSortType=React.useCallback((type)=>{
        dispatch(setSortBy(type));
    },[dispatch]);

    const handleAddDishToCart =obj=>{
dispatch({
    type:'ADD_DISH_CART',
    payload:obj,
})
    }


    return(
            <div className="container">
                <div className="content__top">
                    <Categories
                        activeCategory={category}
                        onClickCategory={onSelectCategory}
                        items={categoryNames}
                    />
                    <SortPopup
                        activeSortType={sortBy.type}
                        items={sortItems}
                        onClickSortType={onSelectSortType}
                    />
                </div>
                <h2 className="content__title">Все блюда</h2>
                <div className="content__items">
                    {items && items.map((obj) =>(
                    <Dish
                        onClickAddDish={handleAddDishToCart}
                        key={obj.id}
                        cartCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        {...obj}/>
                    ))}
                </div>
            </div>
    )
}

export  default Home;
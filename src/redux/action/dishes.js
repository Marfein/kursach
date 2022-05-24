import axios from "axios";

export const fetchDishes = (sortBy,category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });
    axios.get
    (`http://localhost:3001/dishes?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
        dispatch(setDishes(data));
    });
}

export const setDishes = (items) => ({
    type: 'SET_DISHES',
    payload: items,
});
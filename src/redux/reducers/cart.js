const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DISH_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]:
                    !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id], action.payload],
            };
 const allDishes =[].concat.apply([], Object.values(newItems));
 const totalPrice = allDishes.reduce((sum,obj)=>obj.price+sum,0);
            return {
                ...state,
                items: newItems,
                totalCount: allDishes.length,
                totalPrice,
            };
        }
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload,
            };
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload,
            };
        default:
            return state;
    }
}
export default cart;
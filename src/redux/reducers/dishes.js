const initialState={
    items:[],
    isLoaded:false,
}

const dishes=(state=initialState ,action)=>{
    if (action.type === 'SET_DISHES'){
        return{
            ...state,
            items:action.payload,
            isLoaded:true,
        };
    }
    return state;
}
export default dishes;
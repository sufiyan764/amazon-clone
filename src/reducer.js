export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => amount + item.price, 0)
)

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket?.findIndex((item) => item.id === action.id);
            
            let newBasket = [...state.basket];

            if(index> -1){
                newBasket.splice(index,1);
            }else{
                console.warn(`Cannot remove product (id: ${action.id}) as it is not in the basket`);
            }

            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer
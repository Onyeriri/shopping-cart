import { CLEAR_CART, DECREASE_AMOUNT, INCREASE_AMOUNT, REMOVE_ITEM, UPDATE_STATE } from '../actions';

export const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        console.log('clear cart');
        return {
            ...state, carts: new Map()
        };
    } else if (action.type === REMOVE_ITEM) {
        const { payload } = action;

        const cartItems = new Map(state.carts);

        cartItems.delete(payload);

        return {
            ...state, carts: cartItems
        }

    } else if (action.type === INCREASE_AMOUNT) {
        const { payload } = action;
        let newPrice = 0;

        const cartItems = new Map(state.carts)

        const currentItem = cartItems.get(payload);

        const { amount, price } = currentItem;
        newPrice = Number(price) * amount;
        const newItem = { ...currentItem, amount: amount + 1, price: newPrice}

        console.log(newItem);
        
        cartItems.set(payload, newItem)
        return {
            ...state, carts: cartItems
        }

    } else if(action.type === DECREASE_AMOUNT){
        const cartItems = new Map(state.carts);
        const { payload } = action;

        const currentItem = cartItems.get(payload);
        const { amount } = currentItem;

        if (amount <= 1)
            return {
                ...state, carts: cartItems
            }
        const newItem = { ...currentItem, amount: amount - 1 }
        
        cartItems.set(payload, newItem)
        
        return {
            ...state, carts: cartItems
        }
    } else if (action.type === UPDATE_STATE) {
        const { mappedData } = action.payload;
        
        return {
            ...state, carts: mappedData
        }
    }

    return state;
}
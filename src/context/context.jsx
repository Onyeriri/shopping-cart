import { useContext, useReducer } from 'react';
import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { CLEAR_CART, DECREASE_AMOUNT, INCREASE_AMOUNT, REMOVE_ITEM, URL } from '../actions';
import { reducer } from '../reducer/index';
import { getTotal } from '../utils/getTotals';

const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);

// const fetchData = async () => {
//     const response = await fetch('https://www.course-api.com/react-useReducer-cart-project');
//     const data = await response.json()

//     const newCarts = data.map((item) => [item.id, item])
//     const mapCarts = new Map(newCarts);

//     return mapCarts;
// }

// const mapCarts = await fetchData();

const defaultState = {
    carts: new Map()
}

const AppProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer, defaultState);
    getTotal

    const handleClearCart = () => {
        dispatch({type: CLEAR_CART});
    }

    const handleRemoveItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: id});
    }

    const handleIncreaseAmount = (id) => {
        dispatch({type: INCREASE_AMOUNT, payload: id});
    }

    const handleDecreaseAmount = (id) => {
        dispatch({ type: DECREASE_AMOUNT, payload: id });
    }

    useFetch(URL, dispatch);

    console.log(cart);
    
    return (
        <AppContext.Provider
            value={{
                cart,
                handleClearCart,
                handleDecreaseAmount,
                handleIncreaseAmount,
                handleRemoveItem,
            }}
        >
        {children}
    </AppContext.Provider>)
};

export default AppProvider;
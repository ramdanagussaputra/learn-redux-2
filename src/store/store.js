import { configureStore } from '@reduxjs/toolkit';

import UIReducer from './ui-slice';
import CartItemReducer from './cartItem-slice';

const store = configureStore({
    reducer: {
        UI: UIReducer,
        cartItem: CartItemReducer,
    },
});

export default store;

import axios from 'axios';

import { UIActions, hideNotifTimeout } from './ui-slice';
import { cartItemActions } from './cartItem-slice';

export const sendCartData = (cartItem) => {
    return async (dispatch) => {
        try {
            dispatch(
                UIActions.showNotif({
                    status: 'pending',
                    message: 'Sending...',
                    title: 'Sending data',
                })
            );

            const response = await axios.put(
                'https://learn-redux-b0ae1-default-rtdb.firebaseio.com/cart.json',
                cartItem
            );

            if (response.statusText !== 'OK') throw new Error();

            dispatch(
                UIActions.showNotif({
                    status: 'success',
                    message: 'Successful updated the cart',
                    title: 'Cart updated',
                })
            );

            dispatch(hideNotifTimeout());
        } catch (err) {
            dispatch(
                UIActions.showNotif({
                    status: 'error',
                    message: 'Failed to update your item',
                    title: 'Something went wrong',
                })
            );

            dispatch(hideNotifTimeout());
        }
    };
};

export const fetchCartData = () => {
    return async (dispatch) => {
        try {
            dispatch(
                UIActions.showNotif({
                    status: 'pending',
                    message: 'Load your cart',
                    title: 'Loading',
                })
            );

            dispatch(hideNotifTimeout());

            const res = await axios.get(
                'https://learn-redux-b0ae1-default-rtdb.firebaseio.com/cart.json'
            );

            const itemData = res.data.items || [];
            itemData.forEach((item) => dispatch(cartItemActions.addItem({ item })));
        } catch (err) {
            dispatch(
                UIActions.showNotif({
                    status: 'error',
                    message: 'Failed to update your item',
                    title: 'Something went wrong',
                })
            );

            dispatch(hideNotifTimeout());
        }
    };
};

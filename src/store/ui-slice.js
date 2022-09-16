import { createSlice } from '@reduxjs/toolkit';

const UIInitial = {
    showCart: false,
    notification: null,
};

const UISlice = createSlice({
    name: 'UI',
    initialState: UIInitial,
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart;
        },

        showNotif(state, action) {
            state.notification = {
                status: action.payload.status,
                message: action.payload.message,
                title: action.payload.title,
            };
        },

        hideNotif(state) {
            state.notification = null;
        },
    },
});

export const hideNotifTimeout = () => {
    return (dispatch) => {
        setTimeout(() => dispatch(UIActions.hideNotif()), 2000);
    };
};

export const UIActions = UISlice.actions;
export default UISlice.reducer;

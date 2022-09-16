import { createSlice } from '@reduxjs/toolkit';

const cartItemInitial = {
    items: [],
    totalAmount: 0,
    isAdd: false,
};

const cartItemSlice = createSlice({
    name: 'cartItem',
    initialState: cartItemInitial,
    reducers: {
        addItem(state, action) {
            // Set isAdd
            state.isAdd = action.payload.isAdd;

            // Check if product was added
            const existingItem = state.items.find(
                (item) => item.title === action.payload.item.title
            );

            // If product already exist
            if (existingItem) {
                // Increase the quantity
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }

            if (!existingItem) {
                action.payload.item.totalPrice =
                    action.payload.item.price * action.payload.item.quantity;
                state.items.push(action.payload.item);
            }

            state.totalAmount = state.items.reduce((prev, cur) => prev + cur.quantity, 0);
        },

        removeItem(state, action) {
            // Set isAdd
            state.isAdd = action.payload.isAdd;

            // Check if product still exist
            const existingItemIndex = state.items.findIndex(
                (item) => item.title === action.payload.item.title
            );
            const existingItem = state.items[existingItemIndex];

            // Substart the quantity
            existingItem.quantity--;

            // Set total price
            existingItem.totalPrice = existingItem.price * existingItem.quantity;

            // Update item
            if (existingItem.quantity > 0) state.items[existingItemIndex] = existingItem;
            if (existingItem.quantity === 0) state.items.splice(existingItemIndex, 1);

            // Update total amount
            state.totalAmount = state.items.reduce((prev, cur) => prev + cur.quantity, 0);
        },
    },
});

export const cartItemActions = cartItemSlice.actions;
export default cartItemSlice.reducer;

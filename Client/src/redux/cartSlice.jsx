import { createSlice } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const cartSlice = createSlice({
    name: "addtocart",
    initialState: {
        cart: []
    },
    reducers: {
        add: (state, action) => {
            const data = state.cart.filter((item) => item.id == action.payload.id)
            if (data.length > 0) {
                alert("Product Already Added")
            }
            else {
                state.cart.push(action.payload);
            }
        },
        remove: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == action.payload) {
                    state.cart[i].quantity += 1;
                    break;
                }
            }
        },
        decreaseQuantity: (state, action) => {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == action.payload && state.cart[i].quantity > 1) {
                    state.cart[i].quantity -= 1;
                    break;
                }
            }
        },

        removeProduct: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
    },

})

export const { add, remove, increaseQuantity, decreaseQuantity ,removeProduct} = cartSlice.actions;
export default cartSlice.reducer

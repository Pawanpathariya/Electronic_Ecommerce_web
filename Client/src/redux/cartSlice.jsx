import { createSlice } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
const cartSlice = createSlice({
name:"addtocart",
initialState:{
cart:[]
},
reducers: {
        add: (state, action) => {
            const data=state.cart.filter((item) => item.id == action.payload.id)
            if(data.length>0){
                alert("Product Already Added")
            }
            else{
            state.cart.push(action.payload);}
        },
        remove: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
    },

})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer
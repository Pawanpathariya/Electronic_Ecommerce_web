import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
    name:"addtocart",
    reducer: {
        addtocart: cartSlice
    }
});

export default store;


import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer: {
        cart : cartSlice,                      // all slices will be exporting its own reducers ,put all reducers in reducer
    }
});

export default store;
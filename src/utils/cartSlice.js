import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        items: [],
    },
    reducers: {
        additem: (state,action) => { 
                state.items.push(action.payload);
        },
        removeItem: (state,action) =>{
            state.items.pop()
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})
export const {additem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
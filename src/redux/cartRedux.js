import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        quantity: 0,
        total: 0,
        productQuantity: 0
    },
    reducers: {
        addProduct: (state,action)=>{
            state.quantity = state.quantity + action.payload.quantity;
            state.productQuantity = action.payload.quantity;
            state.products.push(action.payload.product);
            state.total += action.payload.price * action.payload.quantity;
        }
    },
})

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;
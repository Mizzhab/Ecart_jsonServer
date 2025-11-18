import { createSlice } from "@reduxjs/toolkit"


export const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishList :(state, action)=>{
            state.push(action.payload)
        }
    }
})

export const {addToWishList} = wishlistSlice.actions

export default wishlistSlice.reducer
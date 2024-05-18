import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // action define
        // 1 add to wishlist - array of data added to wishlist component
        addToWishlist:(state,action)=>{
            state.push(action.payload)
            alert("Added to wishlist")
        },
        deleteFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,deleteFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer
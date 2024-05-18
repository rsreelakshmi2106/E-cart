import { configureStore } from '@reduxjs/toolkit'
import wishlistSlice from './slices/wishlistSlice'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
    reducer:{
        wishlistreducer:wishlistSlice,
        cartreducer:cartSlice
    }
})
import { createSlice } from '@reduxjs/toolkit'
import { GAMES } from "../../constance/data-games"



const product = createSlice({
    name: "product",
    initialState: {
        products: GAMES
    },
    reducers: {
        setAllProduct: (state) => {
            state.products = GAMES
        }
    }
});

export const { setAllProduct } = product.actions

export default product.reducer
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './slice/basket'
import gamesReducer from './slice/games';
import userReducer from "./slice/userSlice"
import openCloseReducer from './slice/openClose';
import productsReducer from "./slice/product"
import searchReducer from "./slice/searchFilter"

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        games: gamesReducer,
        user: userReducer,
        openClose: openCloseReducer,
        products: productsReducer,
        search: searchReducer,
    }
})
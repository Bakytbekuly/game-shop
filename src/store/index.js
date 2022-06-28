import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './slice/basket'
import gamesReducer from './slice/games';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        games: gamesReducer,
    }
})
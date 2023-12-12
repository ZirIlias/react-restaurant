import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { dishSlice } from "./entities/dish";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { api } from "../services/api";

const store = configureStore({
    reducer: {
        restaurant: restaurantSlice.reducer,
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(api.middleware),
});

export default store;
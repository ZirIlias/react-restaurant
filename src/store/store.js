import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { dishSlice } from "./entities/dish";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";

const store = configureStore({
    reducer: {
        restaurant: restaurantSlice.reducer,
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});
export default store;
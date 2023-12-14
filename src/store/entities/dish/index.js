import { createSlice } from "@reduxjs/toolkit";
import { getDishById } from "./thunks/get-dish-by-id";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";
import { getDishesByRestaurantId } from "./thunks/get-dishes-by-restaurant-id";

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.idle
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDishById.pending, state => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getDishById.fulfilled, (state, {payload}) => {
                state.entities[ payload.id ] = payload;
                state.ids.push( payload.id );
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase(getDishById.rejected, state => {
                state.status = REQUEST_STATUSES.rejected;
            })

        builder
            .addCase(getDishesByRestaurantId.pending, state => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getDishesByRestaurantId.fulfilled, (state, {payload}) => {
                payload.forEach(dish => {
                    state.entities[ dish.id ] = dish;
                    state.ids.push( dish.id );
                });
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase(getDishesByRestaurantId.rejected, state => {
                state.status = REQUEST_STATUSES.rejected;
            })

        return builder;
    }
})
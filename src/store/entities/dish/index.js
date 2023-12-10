import { createSlice } from "@reduxjs/toolkit";
import { getDishById } from "./thunks/get-dish-by-id";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.idle
    },
    extraReducers: (builder) => 
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
})
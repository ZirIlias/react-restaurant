import { createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/get-reviews-by-restaurant-id";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";

export const reviewSlice = createSlice({
    name: "review",
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.idle
    },
    extraReducers: (builder) => {
        builder
            .addCase( getReviewsByRestaurantId.pending, (state) => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase( getReviewsByRestaurantId.fulfilled, (state, {payload}) => {
                payload.forEach(review => {
                    state.entities[ review.id ] = review;
                    state.ids.push( review.id );
                });
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase( getReviewsByRestaurantId.rejected, (state) => {
                state.status = REQUEST_STATUSES.rejected;
            })
    }
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewIds } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";
import { apiUrl } from "../../../../constants/api-config";

export const getReviewsByRestaurantId = createAsyncThunk(
    "review/getReviewByRestaurantId",
    async (id, {rejectWithValue}) => {
        const response = await fetch( `${apiUrl}reviews?restaurantId=${id}`);
        const result = await response.json();
        
        if (!result?.length) {
            return rejectWithValue("Empty reviews");
        }
      
        return result;
    } ,
    {
        condition: (id, { getState }) => {  
            const restaurantReviewIds = selectRestaurantReviewIds( getState(), id );
            const allReviewIds = selectReviewIds( getState() );

            return !restaurantReviewIds.every( (reviewId) => allReviewIds.includes(reviewId) );
        },
    }
)
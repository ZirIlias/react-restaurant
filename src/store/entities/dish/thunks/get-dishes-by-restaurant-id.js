import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { apiUrl } from "../../../../constants/api-config";
import { selectRestaurantDishIds } from "../../restaurant/selectors";

export const getDishesByRestaurantId = createAsyncThunk(
    "dish/getDishesByRestaurantId",
    async (id, {rejectWithValue}) => {
        const response = await fetch( `${apiUrl}dishes?id${id}` );
        const result = await response.json();
        
        if (!result) {
            return rejectWithValue("No dishes");
        }
      
        return result;
    },
    {
        condition: (id, { getState }) => {
            const state= getState();
            const restaurantDishIds = selectRestaurantDishIds( state, id );
            const allDishIds = selectDishIds( state);

            return !restaurantDishIds.every( (dishId) => allDishIds.includes(dishId) );
        },
    }
)
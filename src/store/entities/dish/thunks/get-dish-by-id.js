import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { apiUrl } from "../../../../constants/api-config";

export const getDishById = createAsyncThunk(
    "dish/getDishById",
    async (id, {rejectWithValue}) => {
        const response = await fetch( `${apiUrl}dish/${id}` );
        const result = await response.json();
        
        if (!result) {
            return rejectWithValue("No dish");
        }
      
        return result;
    },
    {
        condition: (id, { getState }) => {
            return !selectDishIds(getState()).includes(id);
        },
    }
)
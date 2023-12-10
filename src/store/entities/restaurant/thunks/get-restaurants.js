import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";
import { apiUrl } from "../../../../constants/api-config";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch( `${apiUrl}restaurants/`);
    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Empty restaurants");
    }

    return result;
  },
  {
    condition: (_, { getState }) => !selectRestaurantIds(getState()).length,
  }
);
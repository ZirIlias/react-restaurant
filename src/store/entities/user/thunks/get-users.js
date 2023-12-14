import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";
import { apiUrl } from "../../../../constants/api-config";

export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (_, {rejectWithValue}) => {
        const response = await fetch( `${apiUrl}users/` );
        const result = await response.json();
        
        if (!result) {
            return rejectWithValue("Empty users");
        }
      
        return result;
    },
    {
        condition: (_, {getState}) => !selectUserIds( getState()).length
    }
);
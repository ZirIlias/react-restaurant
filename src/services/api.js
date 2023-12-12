import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../constants/api-config";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: apiUrl
    }),
    endpoints: (builder) => ({
      getDishes: builder.query({
        query: (restaurantId) => ({
          url: "dishes",
          params: { restaurantId },
        }),
      }),        
      getRestaurants: builder.query({
        query: () => ({
          url: "restaurants/",
        })
      }),
      getReviews: builder.query({
        query: (restaurantId) => ({
          url: "reviews",
          params: { restaurantId },
        })
      }),
      getUsers: builder.query({
        query: () => ({
          url: "users/"
        })
      }),
    }),
})

export const { useGetDishesQuery, useGetRestaurantsQuery, useGetReviewsQuery, useGetUsersQuery } =  api;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../constants/api-config";

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ["Review"],
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
        }),
        providesTags: (result, _, restaurantId) => 
          result
            .map(({ id }) => ({ type: "Review", id }))
            .concat(
              { type: "Review", id: restaurantId }
            )
      }),
      getUsers: builder.query({
        query: () => ({
          url: "users/"
        })
      }),      
      createReview: builder.mutation({
        query: ({ restaurantId, newReview }) => ({
          url: `review/${restaurantId}`,
          method: "POST",
          body: newReview,
        }),
        invalidatesTags: (result, _, { restaurantId }) => [
          { type: "Review", id: restaurantId },
        ]
      }),
    }),
})

export const { useGetDishesQuery, useGetRestaurantsQuery, useGetReviewsQuery, useGetUsersQuery, useCreateReviewMutation } =  api;
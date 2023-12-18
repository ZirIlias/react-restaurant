import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../constants/api-config";

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
      getRestaurant: builder.query({
        query: (restaurantId) => ({
          url: `restaurant/${restaurantId}`,
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
      editReview: builder.mutation({
        query: ({ reviewId, newReview }) => ({
          url: `review/${reviewId}`,
          method: "PATCH",
          body: newReview,
        }),
        invalidatesTags: (result, _, { reviewId }) => [
          { type: "Review", id: reviewId },
        ]
      }),
    }),
})

export const { useGetDishesQuery, useGetRestaurantsQuery, useGetRestaurantQuery, useGetReviewsQuery, useGetUsersQuery, useCreateReviewMutation, useEditReviewMutation } =  api;
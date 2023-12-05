export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];
export const selectRestaurantMenuIds = (state, id) => selectRestaurantModule(state).entities[id].menu; 
export const selectRestaurantReviewIds = (state, id) => selectRestaurantModule(state).entities[id].reviews; 
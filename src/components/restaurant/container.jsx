import { useParams } from "react-router-dom/dist";
import Restaurant from "./component";
import { useGetRestaurantQuery } from "../../store/services/api";

export const RestaurantContainer = ( ) => {
   const { restaurantId } = useParams();
   const {data: restaurant, isFetching} = useGetRestaurantQuery(restaurantId);

   if (isFetching)
      return 'Restaurant loading';
   
	return <Restaurant restaurant={restaurant}/>
}
import { useParams } from "react-router-dom";
import {RestaurantReviewsSection} from "./components";

export const RestaurantReviewsSectionContainer = () => {

    const {restaurantId} = useParams();

    return <RestaurantReviewsSection restaurantId={restaurantId}/>
}
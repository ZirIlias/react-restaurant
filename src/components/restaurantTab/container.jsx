import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import RestaurantTab from "./component";

const RestaurantTabContainer = ( {restaurantId, onTabClick, ...props} ) => {

    const restaurant = useSelector( (state) => selectRestaurantById(state, restaurantId) );
    
    return <RestaurantTab onTabClick={ () => onTabClick(restaurantId) } {...props} >{restaurant?.name}</RestaurantTab>
}

export default RestaurantTabContainer;
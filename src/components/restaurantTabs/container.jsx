import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantIds } from "../../store/entities/restaurant/selectors";
import RestaurantTabs from "./components";
import { getRestaurants } from "../../store/entities/restaurant/thunks/get-restaurants";
import { useEffect } from "react";

const RestaurantTabsContainer = ( {onTabClick, ...props} ) => {

    const restaurantIds = useSelector( selectRestaurantIds );
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getRestaurants());
    }, [dispatch])

    return <RestaurantTabs onTabClick={onTabClick} restaurantIds={restaurantIds} {...props}/>
}

export default RestaurantTabsContainer;
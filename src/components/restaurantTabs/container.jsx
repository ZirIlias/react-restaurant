import RestaurantTabs from "./components";
import { useGetRestaurantsQuery } from "../../services/api";

const RestaurantTabsContainer = ( {onTabClick, ...props} ) => {

    const { data, isFetching } = useGetRestaurantsQuery();

    if ( isFetching )
        return null;

    return <RestaurantTabs onTabClick={onTabClick} restaurants={ data } {...props}/>
}

export default RestaurantTabsContainer;
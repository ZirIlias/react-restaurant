import RestaurantTab from "../restaurantTab/component";
import styles from "./RestaurantTabs.module.scss";
import classNames from "classnames";

const RestaurantTabs = ( { restaurants, onTabClick, className, selectedRestaurantId} ) => {

    return <div className={ classNames( styles.tabsList, className) }>
        {restaurants.map((restaurant) => (
            <RestaurantTab key={restaurant.id} onTabClick={ () => onTabClick(restaurant.id) } active={ restaurant.id === selectedRestaurantId} >
                {restaurant?.name}
            </RestaurantTab>
        ))}
    </div>;
}

export default RestaurantTabs;
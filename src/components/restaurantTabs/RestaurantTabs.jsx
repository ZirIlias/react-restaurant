import Button from "../../ui/button/Button";
import styles from "./RestaurantTabs.module.scss";
import classNames from "classnames";

const RestaurantTabs = ( {restaurants, onRestaurantSelect, className, selectedRestaurantId} ) => {
    return <div className={ classNames( styles.tabsList, className) }>
        {restaurants.map((restaurant) => (
            <Button key={restaurant.id} onClick={ () => onRestaurantSelect(restaurant.id) } active={ restaurant.id === selectedRestaurantId}>
                {restaurant.name}
            </Button>
        ))}
    </div>;
}

export default RestaurantTabs;
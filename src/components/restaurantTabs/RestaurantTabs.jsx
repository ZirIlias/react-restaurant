import Button from "../../ui/button/Button";
import styles from "./RestaurantTabs.module.scss";
import classNames from "classnames";
import buttonStyles from "../../ui/button/Button.module.scss";
import { useTheme } from "../../context/ThemeContext/hooks";

const RestaurantTabs = ( {restaurants, onRestaurantSelect, className, selectedRestaurantId} ) => {

    const {theme} = useTheme();

    return <div className={ classNames( styles.tabsList, className) }>
        {restaurants.map((restaurant) => (
            <Button key={restaurant.id} onClick={ () => onRestaurantSelect(restaurant.id) } active={ restaurant.id === selectedRestaurantId} className={buttonStyles[theme]}>
                {restaurant.name}
            </Button>
        ))}
    </div>;
}

export default RestaurantTabs;